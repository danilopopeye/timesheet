define([], function(){
  var
    days = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday'
    ], 

    months = [
      'January','February','March','April','May','June','July',
      'August','September','October','November','December'
    ];

  function i(n){
    return parseInt( n, 10 );
  }

  return {
    getLastDay: function getLastDay(year, month){
      return new Date( year, month, 0 ).getDate();
    },
    getMonthName: function(m){
      return months[ i( m ) ] || '';
    },
    getDayName: function(d){
      return days[ i( d ) ] || '';
    },
    getDayAbbr: function(d){
      return this.getDayName( d ).substr(0, 3);
    },
    isSameDay: function(x, y){
      return x.getFullYear() === y.getFullYear() &&
        x.getMonth() === y.getMonth() &&
        x.getDate() === y.getDate();
    }
  };
});
