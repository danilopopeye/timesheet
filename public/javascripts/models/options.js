define(['backbone', 'localstorage'], function(Backbone, Store){
  return Backbone.Model.extend({
    localStorage: new Store('options'), 
    text: function(){
      return [ this.get('year'), this.get('month') ].join('-');
    },
    defaults: {
      month: null,
      year: null,
      id: 'timesheet-options' // localStorage need a id
    }
  });
});
