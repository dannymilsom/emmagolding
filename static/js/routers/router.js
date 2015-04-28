define(['backbone',
        'models/article',
        'views/homepage-view',
        'views/articles-view',
        'views/article-view'
        ], function(Backbone, Article, HomepageView, ArticlesView, ArticleView) {

        var Router = Backbone.Router.extend({
          routes: {
            "": "renderHome",
            "news/": "renderArticles",
            "news/:slug": "renderArticle"
          },
          initialize: function(options){
            this.event_agg = options.event_agg;
          },
          renderHome: function() {
            var homepage = new HomepageView({
              event_agg: this.event_agg
            });
          },
          renderArticles: function() {
            var displayArticles = new ArticlesView({
              event_agg: this.event_agg
            });
          },
          renderArticle: function(slug) {
            var article = new Article({
              id: slug
            });
            article.fetch();
            var displayArticles = new ArticleView({
              event_agg: this.event_agg,
              model: article
            });
          }
        });

        return Router;
});