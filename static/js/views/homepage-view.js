define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  
  var HomepageView = Backbone.View.extend({
    el: "#main-container",
    template: _.template($("#homepage-template").html()),
    events: {
      'click .display-articles': 'displayArticles'
    },
    initialize: function(options) {
      this.event_agg = options.event_agg;
      this.$el.empty();
      this.render();
    },
    render: function() {
      this.showSpinner();
      this.hideSpinner().done(_.bind(function() {
        this.$el.html(this.template());
      }, this));
    }
  });
  return HomepageView;

});