define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

  var ArticlePreview = Backbone.View.extend({
    className: 'article-preview col-xs-12',
    template: _.template($("#article-preview").html()),
    events: {
      'click .article-link': 'displayArticle'
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
  return ArticlePreview;

});