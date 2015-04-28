define(['backbone'], function(Backbone) {

  var Article = Backbone.Model.extend({
      urlRoot: '/api/articles'
  });
  return Article;

})

