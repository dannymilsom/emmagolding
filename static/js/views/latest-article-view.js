define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

  var LatestArticle = Backbone.View.extend({
    tagName: "li", 
    className: 'article-preview col-xs-12 col-md-4',
    template: _.template($("#latest-article-preview").html()),
    events: {
      'click .article-link': 'displayArticle',
      'click .read-more a': 'displayArticle'
    },
    initialize: function(options) {
      this.event_agg = options.event_agg;
    },
    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    },
    displayArticle: function(e) {
      e.preventDefault();
      this.goTo('/news/' + this.model.get('slug'));
    }
  });
  return LatestArticle;

});