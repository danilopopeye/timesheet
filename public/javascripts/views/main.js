define([
  'backbone', 'underscore', 'utils', 'collections/month',  'text!/templates/main.html'
], function(Backbone, _, Utils, month, template){
  return Backbone.View.extend({
    el: 'body',

    template: _.template( template ),

    initialize: function(){
      var o = this.options;

      this.collection = new ( month(
        o.year, o.month
      ) );

      this.collection.populate();
    },

    render: function(){
      this.$el.html( this.template( _.extend(
        this.collection.first().attributes, {
          abbr: _.bind(Utils.getDayAbbr, Utils),
          name: _.bind(Utils.getMonthName, Utils),
          models: this.collection.models
        }, this.options
      ) ) );
    }
  });
});
