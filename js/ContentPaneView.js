var ContentPaneView = Backbone.View.extend({

	initialize: function(options) {
		this.template = options.template;
	},

	el: "div.scrollable-content",

	render: function(options){
		var that = this;

		TemplateManager.get(this.template, function(template){
	      	var html = $(template);
	      	that.$el.html(html);

	      	if (that.template === 'home') {
				$('.fa-map-pin a').on('click', function () {
					$('.modal').addClass('show');
				});
			}

			if (that.template === 'about') {
				$('.continue-reading').on('click', function () {
					$('.history-modal').addClass('show');
				});

				for (var i = 1; i <= 5; i++) {
					$('.secondary').hide();
	        		$('.secondary').delay(2000 * i).fadeIn(500).delay(2000 * i).fadeOut(500);
				};
			}
	    });
		return this;
	}
});
