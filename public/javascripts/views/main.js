define([
  'backbone', 'underscore', 'jquery', 'utils',
  'collections/month',  'text!/templates/main.html'
], function(Backbone, _, $, Utils, month, template){
  return Backbone.View.extend({
    el: 'body',

    template: _.template( template ),

    events: {
      'click #calendar li': 'dayClick'
    },

    initialize: function(){
      var o = this.options;

      this.collection = new ( month(
        o.year, o.month
      ) );

      this.collection.populate();
    },

    render: function(){
      this.$el.html( this.template( _.extend(
        this.collection.today().attributes, {
          abbr: _.bind(Utils.getDayAbbr, Utils),
          name: _.bind(Utils.getMonthName, Utils),
          models: this.collection.models
        }, this.options
      ) ) );
    },

    dayClick: function(e){
      e.preventDefault();

      var el = $( e.currentTarget );

      if( el.hasClass('active') ){
        return false;
      }

      el
        .siblings('.active').removeClass('active')
      .end()
        .addClass('active');
    }
  });
});
