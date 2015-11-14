var ContentPaneView = Backbone.View.extend({

	initialize: function(options) {
		this.template = options.template;
	},

	el: "div.scrollable-content",

	render: function() {
		var content = $(this.template).html();
		console.log(this.el);
		$(this.el).html(content);
		return this;
	}
});
