define([ 'backbone', 'utils' ], function(Backbone, Utils){
  return Backbone.Model.extend({
    defaults: {
      date: new Date,
      exit_hour: '--',
      exit_minute: '--',
      minimum: '--:--',
      maximum: '--:--'
    },

    today: function(){
      return Utils.isSameDay( this.get('date'), new Date() );
    }
  });
});
