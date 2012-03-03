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
  'app',
  'backbone',
  'underscore',
  'jquery'
], function(app, backbone, underscore, jquery){
  // remove global reference
  backbone.noConflict();
  underscore.noConflict();
  jquery.noConflict(true);

  // Run Forest... RUN!
  app.initialize();
});
