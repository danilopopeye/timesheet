define([
  'backbone', 'underscore', 'jquery', 'utils',
  'collections/month',  'text!../../templates/main.html'
], function(Backbone, _, $, Utils, month, template){
  return Backbone.View.extend({
    el: '#timesheet',

    template: _.template( template ),

    events: {
      'click #calendar li': 'dayClick',
      'blur #entrance, #exit': 'change',
      'click #reset': 'reset'
    },

    initialize: function(){
      var o = this.options;

      this.collection = new ( month(
        o.year, o.month
      ) );

      this.collection.populate();

      this.model = this.getModel();

      this.model.bind('error', this.error, this);

      this.model.bind('change', this.render, this);

      this.model.trigger('change');
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

      this.$el.html( this.template( _.extend({
        active: this.model.attributes,
        models: this.collection.models,
        abbr: _.bind(Utils.getDayAbbr, Utils),
        name: _.bind(Utils.getMonthName, Utils),
        makeClass: _.bind(klass, this.model)
      }, this.options ) ) );

      this.centralize();
    },

    centralize: function(e){
      var calendar = this.$el.find('#calendar'),
        size = calendar.width(),
        active = parseInt( calendar.find('.active strong').html(), 10 ),
        left = ( ( active - 1 ) * 60 ) + 30,
        scroll = left - ( size / 2 );

      calendar.scrollLeft( scroll );
    },

    getModel: function(){
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

      Backbone.history.navigate(
        [ '!', o.year, o.month + 1, day ].join('/'), {
          trigger: true
        }
      );
    },

    getDay: function(day){
      return this.collection.at(
        parseInt( day, 10 ) - 1
      );
    },

    change: function(e){
      e.preventDefault();

      var el = $(e.currentTarget);

      this.model.save( el.attr('id'), el.val(), {
        success: function(){
          $('#footer').text('');
        }
      } );
    },

    error: function(model, message){
      $('#footer').text( message );
    },

    reset: function(e){
      e.preventDefault();

      localStorage.clear();

      this.collection.reset([], {
        silent: true
      });

      Backbone.history.navigate('!/clear', true);
    }
  });
});
