define(['backbone', 'localstorage'], function(Backbone, Store){
  return Backbone.Model.extend({
    localStorage: new Store('options'),

    defaults: {
      month: null,
      year: null,
      id: 'timesheet-options' // localStorage need a id
    },

    text: function(){
      return [ this.get('year'), this.get('month') ].join('-');
    },

    validate: function(attr, errors){
      var year = parseInt( attr.year, 10 ),
        month = parseInt( attr.month, 10 );

      if( isNaN( year ) || isNaN( month ) ){
        return "The month must be YYYY-MM";
      }
    }
  });
});
