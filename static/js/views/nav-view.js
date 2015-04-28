define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  
  var NavView = Backbone.View.extend({
    el: ".navbar",
    template: _.template($("#nav-template").html()),
    events: {
      'click #news': 'displayArticles',
      'click #home': 'displayHome'
    },
    initialize: function(options) {
      this.event_agg = options.event_agg;
      this.render();
    },
    render: function() {
      this.$el.html(this.template());
    },
    displayArticles: function(e) {
      e.preventDefault();
      this.goTo('/news/');
    },
    displayHome: function(e) {
      e.preventDefault();
      this.goTo('');
    }
  });
  return NavView;

});