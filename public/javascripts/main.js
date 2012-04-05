// Require.js allows us to configure shortcut alias
require.config({
  paths: {
    text: 'libs/text',
    jquery: 'libs/jquery/jquery',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    localstorage: 'libs/backbone/localstorage'
  }
});

require([
  'backbone',
  'underscore',
  'jquery',
  'router'
], function(backbone, underscore, jquery, router){
  // remove global reference
  backbone.noConflict();
  underscore.noConflict();
  jquery.noConflict(true);

  // create the app router
  new router;

  // Run Forest... RUN!
  backbone.history.start();
});
