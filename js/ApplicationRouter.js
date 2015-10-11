var ApplicationRouter = Backbone.Router.extend({

	initialize: function(el) {
		this.el = el;
		console.log(this.el);

		this.homeView = new ContentPaneView({template: '#home'});
		this.ceremoniesView = new ContentPaneView({template: '#ceremonies'});
		this.visitView = new ContentPaneView({template: '#visit'});
		this.donationsView = new ContentPaneView({template: '#donations'});
		this.aboutView = new ContentPaneView({template: '#about'});
		this.notFoundView = new ContentPaneView({template: '#not-found'});
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

	/*
	 * Change the active element in the topbar
	 */
	setActiveEntry: function(url) {
		// Unmark all entries
		$('li').removeClass('active');

		// Mark active entry
		$("li a[href='" + url + "']").parents('li').addClass('active');
	},

	home: function() {
		this.switchView(this.homeView);
		this.setActiveEntry('#home');
	},
	ceremonies: function() {
		this.switchView(this.ceremoniesView);
		this.setActiveEntry('#ceremonies');
	},
	visit: function() {
		this.switchView(this.visitView);
		this.setActiveEntry('#visit');
	},
	donations: function() {
		this.switchView(this.donationsView);
		this.setActiveEntry('#donations');
	},

	about: function() {
		this.switchView(this.aboutView);
		this.setActiveEntry('#about');
	},


	notFound: function() {
		this.switchView(this.notFoundView);
	}

});
