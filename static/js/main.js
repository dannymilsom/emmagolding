require.config({
  baseUrl: '/static/js',
  paths: {
    templates: '../templates',
    text: 'libs/text',
    jquery: 'libs/jquery-2.1.3.min',
    underscore: 'libs/underscore-min',
    backbone: 'libs/backbone-min',
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: "Backbone"
    }
  }
});

require(['jquery',
        'underscore',
        'backbone',
        'routers/router',
        'views/nav-view'
        ], function($, _, Backbone, Router, NavView) {

      // helper function for router navigation
      Backbone.View.prototype.goTo = function(uri) {
        router.navigate(uri, {trigger: true});
      };

      // util function to show the loading spinner
      Backbone.View.prototype.showSpinner = function() {
        return $(".fa-spin").fadeIn().promise();
      };

      // util function to hide the loading spinner
      Backbone.View.prototype.hideSpinner = function() {
        return $('.fa-spin').fadeOut().promise();
      };

      // add support for a pub/sub design pattern
      var vent = _.extend({}, Backbone.Events);

      // initalise the navigational bar
      var nav = new NavView({event_agg: vent});

      // initalise the router
      var router = new Router({event_agg: vent});

      // start history with HTML5 pushState activated
      if (!Backbone.History.started) {
        Backbone.history.start({pushState: true});
      }
});