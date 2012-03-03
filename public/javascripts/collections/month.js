define([
  'backbone', 'localstorage', 'utils', 'models/day'
], function(Backbone, Store, Utils, Day){
  return function(year, month){
    return Backbone.Collection.extend({
      localStorage: new Store( year +'-'+ month ), 
      model: Day,

      options: {
        year: year,
        month: month
      },

      populate: function(){
        this.fetch();

        if( this.length === 0 ){
          this.fillMonth();
        }
      },
      fillMonth: function(){
        var l = [], last = Utils.getLastDay(
          this.options.year, this.options.month
        );

        for( var i = 1; i <= last; i++ ){
          l.push({ 
            date: new Date( year, ( month - 1 ), i )
          });
        }

        this.add( l );
      }
    });
  };
});
