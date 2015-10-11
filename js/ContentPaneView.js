var ContentPaneView = Backbone.View.extend({

	initialize: function(options) {
		this.template = options.template;
	},

	render: function() {
		var content = $(this.template).html();
		$(this.el).html(content);
		return this;
	}
});
