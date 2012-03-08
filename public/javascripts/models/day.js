define([ 'backbone', 'utils' ], function(Backbone, Utils){
  return Backbone.Model.extend({
    defaults: {
      date: new Date,
      entrance: '--:--',
      minimum: '--:--',
      maximum: '--:--',
      exit: '--:--'
    },

    today: function(){
      return Utils.isSameDay( this.get('date'), new Date() );
    },

    validate: function(attr, errors){
      if( ! Utils.isValidHour( attr.entrance ) ){
        return "The entrance must be a valid hour ( hh:mm )";
      }

      if( ! Utils.isValidHour( attr.exit ) ){
        return "The exit must be a valid hour ( hh:mm )";
      }
    }
  });
});
