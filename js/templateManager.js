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