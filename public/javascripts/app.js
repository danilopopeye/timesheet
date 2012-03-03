define([
  'backbone',
  'router'
], function(Backbone, Router){
  return {
    initialize: function(){
      new Router;
      Backbone.history.start();
    }
  };
});
