define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  
  var ArticleView = Backbone.View.extend({
    el: "#main-container",
    template: _.template($("#article-template").html()),
    events: {
      'click .display-articles': 'displayArticles'
    },
    initialize: function(options) {
      this.event_agg = options.event_agg;
      this.$el.empty();
      this.model.on('request', this.showSpinner, this);
      this.model.on('sync', this.render, this);
      this.model.fetch();
    },
    render: function() {
      this.hideSpinner().done(_.bind(function() {
        this.$el.html(this.template(this.model.attributes));
      }, this));
    }
  });
  return ArticleView;

});