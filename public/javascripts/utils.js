define( [ 'underscore' ], function(_){
  var
    days = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday'
    ], 

    months = [
      'January','February','March','April','May','June','July',
      'August','September','October','November','December'
    ];

  return {
    getLastDay: function getLastDay(year, month){
      return new Date( year, month, 0 ).getDate();
    },
    getMonthName: function(m){
      return months[ m ] || '';
    },
    getDayName: function(d){
      return days[ d ] || '';
    },
    getDayAbbr: function(d){
      return this.getDayName( d ).substr(0, 3);
    }
  };
});
