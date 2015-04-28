define(['backbone', 'models/article'], function(Backbone, Article) {

  var Articles = Backbone.Collection.extend({
      model: Article,
      url: '/api/articles'
  });
  return Articles;

});