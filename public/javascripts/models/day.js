define([ 'backbone', 'utils', 'calculator' ], function(Backbone, Utils, Calc){
  return Backbone.Model.extend({
    defaults: {
      date: new Date,
      entrance: '--:--',
      minimum: '--:--',
      regular: '--:--',
      maximum: '--:--',
      exit: '--:--'
    },

    initialize: function(){
      this.on('change:entrance', this.calculate, this);
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
    },

    calculate: function(){
      var value = this.get('entrance');

      this.save({
        regular: Calc.regularTime( value ), 
        minimum: Calc.minTime( value ), 
        maximum: Calc.maxTime( value )
      });
    }
  });
});
