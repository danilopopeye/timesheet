define([ 'backbone', 'utils' ], function(Backbone, Utils){
  return Backbone.Model.extend({
    defaults: {
      date: new Date,
      exit_hour: '--',
      exit_minute: '--',
      minimum: '--:--',
      maximum: '--:--'
    },

    initialize: function(){
      this.set({
        date: new Date( this.get('date') )
      });
    },

    today: function(){
      return Utils.isSameDay( this.get('date'), new Date() );
    }
  });
});
