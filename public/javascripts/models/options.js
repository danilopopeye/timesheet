define(['backbone', 'localstorage'], function(Backbone, Store){
  return Backbone.Model.extend({
    localStorage: new Store('options'), 
    month: null,
    year: null,
    text: function(){
      return [ this.get('year'), this.get('month') ].join('-');
    }
  });
});
