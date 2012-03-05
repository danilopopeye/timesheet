define([
  'backbone', 'underscore', 'text!/templates/index.html'
], function(Backbone, _, template){
  return Backbone.View.extend({
    el: 'body',

    template: template,

    initialize: function(){
      this.model.bind('change', this.redirect, this);

      this.model.fetch({
        error: _.bind(this.render, this)
      });
    },

    events: {
      'click button': 'save'
    },

    redirect: function(){
      var year = this.model.get('year'),
        month = this.model.get('month');

      this.options.router.navigate(
        '!/'+ year +'/'+ month + '/today', { trigger: true }
      );
    },

    render: function(){
      this.$el.html( this.template );
    },

    save: function(e){
      var value = this.$el.find('input').val(),
        date = value.split('-');

      this.model.save({
        year: date[0], month: date[1]
      });
    }
  });
});
