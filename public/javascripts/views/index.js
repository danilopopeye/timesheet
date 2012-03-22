define([
  'backbone', 'underscore', 'text!../../templates/index.html', 'utils'
], function(Backbone, _, template, Utils){
  return Backbone.View.extend({
    el: 'body',

    template: template,

    initialize: function(){
      this.model.bind('change', this.redirect, this);

      this.model.bind('error', this.error, this);

      this.model.fetch({
        error: _.bind(this.render, this)
      });
    },

    events: {
      'blur input': 'change'
    },

    redirect: function(){
      var year = this.model.get('year'),
        month = this.model.get('month');

      if( ! year || ! month ){
        return this.render();
      }

      this.options.router.navigate(
        this.findRoute(year, month), true
      );
    },

    findRoute: function(year, month){
      return Utils.isSameMonth(year, month)
        ? '!/today' : '!/'+ year +'/'+ month + '/1';
    },

    render: function(){
      this.$el.html( this.template );
    },

    change: function(e){
      var value = this.$el.find('input').val(),
        date = value.split('-');

      this.model.save({
        year: date[0], month: parseInt( date[1], 10 ) - 1
      });
    },

    error: function(model, message){
      this.$el.find('#message').text( message );
    }
  });
});
