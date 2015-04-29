define(['jquery',
        'underscore',
        'backbone',
        'collections/articles',
        'views/latest-article-view'
        ], function($, _, Backbone, Articles, LatestArticle) {
  
      var HomepageView = Backbone.View.extend({
        el: "#main-container",
        template: _.template($("#homepage-template").html()),
        events: {
          'click .display-articles': 'displayArticles'
        },
        initialize: function(options) {
          this.event_agg = options.event_agg;
          this.query_limit = 3;
          this.$el.empty();
          this.collection = new Articles();
          this.collection.fetch();
          this.collection.on('add', this.showSpinner, this);
          this.collection.on('sync', this.render, this);
        },
        render: function() {
          this.hideSpinner().done(_.bind(function() {
            this.$el.html(this.template());
            _.chain(this.collection.first(this.query_limit))
             .each(this.addArticle, this);
            return this;
          }, this));
        },
        addArticle: function(article) {
          var latestArticle = new LatestArticle({
            model: article,
            event_agg: this.event_agg
          });
          this.$("#latest-blog-posts").append(latestArticle.render().el);
        }
      });
      return HomepageView;

});