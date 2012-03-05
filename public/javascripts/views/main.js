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
      function klass(model){
        return [
          'class="',
          model.today() ? 'today' : '',
          Utils.isSameDay(
            model.get('date'), this.get('date')
          ) ? 'active' : '',
          '"'
        ].join(' ');
      }

      var active = this.getActive();

      this.$el.html( this.template( _.extend({
        active: active.attributes,
        models: this.collection.models,
        abbr: _.bind(Utils.getDayAbbr, Utils),
        name: _.bind(Utils.getMonthName, Utils),
        makeClass: _.bind(klass, active)
      }, this.options ) ) );
    },

    getActive: function(){
      return this.options.day === 'today'
        ? this.collection.today()
        : this.getDay( this.options.day )
    },

    dayClick: function(e){
      e.preventDefault();

      var day, o = this.options,
        el = $( e.currentTarget );

      if( el.hasClass('active') ){
        return false;
      }

      day = el.find('strong').text();

      el
        .siblings('.active').removeClass('active')
      .end()
        .addClass('active');

      o.router.navigate(
        [ '!', o.year, o.month, day ].join('/'), {
          trigger: true
        }
      );
    },

    getDay: function(day){
      return this.collection.at(
        parseInt( day, 10 ) - 1
      );
    }
  });
});
