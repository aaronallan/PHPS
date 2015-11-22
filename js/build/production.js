var ApplicationRouter = Backbone.Router.extend({

	initialize: function(el) {
		this.el = el;
		this.homeView = new ContentPaneView({template: 'home'});
		this.ceremoniesView = new ContentPaneView({template: 'ceremonies'});
		this.visitView = new ContentPaneView({template: 'visit'});
		this.donationsView = new ContentPaneView({template: 'donations'});
		this.aboutView = new ContentPaneView({template: 'about'});
		this.notFoundView = new ContentPaneView({template: 'not-found'});
	},

	routes: {
		"": "home",
		"home": "home",
		"ceremonies" : "ceremonies",
		"visit" : "visit",
		"donations" : "donations",
		"about": "about",
		"*else": "notFound"
	},

	currentView: null,

	switchView: function(view) {
		if (this.currentView) {
			this.currentView.remove();
		}

		// Move the view element into the DOM (replacing the old content)
		this.el.html(view.el);

		// Render view after it is in the DOM (styles are applied)
		view.render();

		this.currentView = view;
	},

	//Set Active Tab in index.html
	setActiveTab: function(url) {
		$('li').removeClass('active');
		$("li a[href='" + url + "']").parents('li').addClass('active');
	},

	home: function() {
		this.switchView(this.homeView);
		this.setActiveTab('#home');
	},
	ceremonies: function() {
		this.switchView(this.ceremoniesView);
		this.setActiveTab('#ceremonies');
	},
	visit: function() {
		this.switchView(this.visitView);
		this.setActiveTab('#visit');
	},
	donations: function() {
		this.switchView(this.donationsView);
		this.setActiveTab('#donations');
	},

	about: function() {
		this.switchView(this.aboutView);
		this.setActiveTab('#about');
	},

	notFound: function() {
		this.switchView(this.notFoundView);
	}

});

TemplateManager = {
  templates: {},

  get: function(id, callback){
    var template = this.templates[id];

    if (template) {
      callback(template);

    } else {

      var that = this;
      $.get("views/" + id + ".html", function(template){
        var html = $(template);
        that.templates[id] = html;
        callback(html);
      });

    }
  }
}
// Override View.remove()'s default behavior
Backbone.View = Backbone.View.extend({
	remove: function() {
		$(this.el).empty().detach();
		return this;
	}
});

var ContentPaneView = Backbone.View.extend({

	initialize: function(options) {
		this.template = options.template;
	},

	el: "div.scrollable-content",

	imgLoaded: false,

	renderImage: function () {
		var that = this;
		if (that.imgLoaded === false) {
			$('img').hide();

			if(that.template === 'about') {
				$('.about-photo').hide();
			}

			$('img').on('load', function(){
			 	$('.loading-cog').hide();
			  	$('img').fadeIn(300);
			  	if(that.template === 'about') {
					$('.about-photo').fadeIn(300);
				}
			  	that.imgLoaded = true;
			});
		}
	},

	render: function(options){
		var that = this;

		TemplateManager.get(this.template, function(template){
	      	var html = $(template);
	      	that.$el.html(html);
	      	that.renderImage();

	      	if (that.template === 'home') {
				$('.fa-map-pin a').on('click', function () {
					$('.modal').addClass('show');
				});
			}

			if (that.template === 'about') {
				$('.continue-reading').on('click', function () {
					$('.history-modal').addClass('show');
				});

				for (var i = 2; i <= 6; i++) {
					$('.secondary').hide();
	        		$('.secondary').delay(2000 * i).fadeIn(500).delay(2000 * i).fadeOut(500);
				};
			}
	    });
		return this;
	}
});

(function($) {
  $(document).on('ready', function (){

    // Hide / Show movile menu
    $('.hamburger, .mobile-menu ul li').on('click', function () {
      $('.mobile-menu').slideToggle();
    });

    //Hide Info Modal
    $('.close').on('click', function () {
      $('.modal').removeClass('show');
    });

    //Hide History Modal
    $('.history-wrapper').on('click', function () {
      $('.history-modal').removeClass('show');
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27 && $('.history-modal').hasClass('show')) {
         $('.history-modal').removeClass('show');
        }
        if (e.keyCode == 27 && $('.modal').hasClass('show')) {
         $('.modal').removeClass('show');
        }
      });
    });

})(jQuery);
