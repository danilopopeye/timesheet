define([
  'backbone', 'underscore', 'text!/templates/main.html'
], function(Backbone, _, template){
  return Backbone.View.extend({
    el: 'body',

    template: _.template( template ),

    initialize: function(){
      this.render();
    },

    render: function(){
      this.$el.html(
        this.template( this.options )
      );
    }
  });
});
