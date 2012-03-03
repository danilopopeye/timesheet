define([ 'backbone' ], function(Backbone){
  return Backbone.Model.extend({
    defaults: {
      date: new Date,
      exit_hour: '18',
      exit_minute: '00',
      minimum: '17:45',
      maximum: '18:15'
    }
  });
});
