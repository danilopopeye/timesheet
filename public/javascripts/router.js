define([
  'backbone', 'models/options', 'views/index', 'views/main'
], function(Backbone, options, vIndex, vMain){
  return Backbone.Router.extend({
    routes: {
      '': 'index',
      '!/index': 'index',
      '!/clear': 'clear',
      '!/today': 'today',
      '!/:year/:month/:day': 'main'
    },
    index: function(){
      new vIndex({
        model: new options,
        router: this
      });
    },
    main: function(year, month, day){
      new vMain({
        year: year,
        month: month,
        day: day,
        router: this
      });
    },
    clear: function(){
      ( new options ).destroy();
      this.navigate('!/index', true);
    },
    today: function(){
      var d = new Date();

      this.main(
        d.getFullYear(), d.getMonth(), d.getDate()
      );
    }
  });
});
