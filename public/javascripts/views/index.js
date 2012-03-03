define(['backbone', 'models/options'], function(Backbone, options){
  var Options = new options({
    id: 'timesheet-options' // localStorage need a id
  });

  return Backbone.View.extend({
    el: '#month_box',

    initialize: function(){
      this.input = this.$el.find('#month');

      Options.bind('change', this.render, this);

      Options.fetch();
    },

    events: {
      'click button': 'save'
    },

    render: function(){
      this.input.val(
        Options.text()
      );
    },

    save: function(e){
      var date = this.input.val().split('-');

      Options.save({
        year: date[0], month: date[1]
      });
    }
  });
});
