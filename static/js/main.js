require.config({
  baseUrl: '/js',
  paths: {
    templates: '../templates',
    text: 'libs/text',
    jquery: 'libs/jquery-2.1.3.min.js',
    underscore: 'libs/underscore.min',
    backbone: 'libs/backbone.min',
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