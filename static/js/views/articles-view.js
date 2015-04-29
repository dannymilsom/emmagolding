define(['jquery',
        'underscore',
        'backbone',
        'collections/articles',
        'views/article-preview-view'
        ], function($, _, Backbone, Articles, ArticlePreview) {

  var ArticlesView = Backbone.View.extend({
    el: '#main-container',
    initialize: function(options) {
      this.event_agg = options.event_agg;
      this.$el.empty();
      this.collection = new Articles();
      this.collection.fetch();
      this.collection.on('add', this.showSpinner, this);
      this.collection.on('sync', this.render, this);
    },
    render: function() {
      this.hideSpinner().done(_.bind(function() {
        this.$el.remove("li");
        this.collection.each(this.addArticle, this);
        return this;
      }, this));
    },
    addArticle: function(article) {
      var articlePreview = new ArticlePreview({
        model: article,
        event_agg: this.event_agg
      });
      this.$el.append(articlePreview.render().el);
    }
  });
  return ArticlesView;

});

