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
      var d = new Date,
        year = parseInt( attr.year, 10 ),
        month = parseInt( attr.month, 10 );

      if( isNaN( year ) || year < 0 || year > d.getFullYear() ){
        return "The year must be valid";
      }

      if( isNaN( month ) || month < 1 || month > 12 ){
        return "The month must be valid";
      }
    }
  });
});
