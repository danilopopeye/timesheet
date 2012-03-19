define(function(){
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
    isDate: function(d){
      return Object.prototype.toString.call( d ) === '[object Date]';
    },
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
      x = new Date(x); y = new Date(y);
      return this.isDate(x) && this.isDate(y) &&
        x.getFullYear() === y.getFullYear() &&
        x.getMonth() === y.getMonth() &&
        x.getDate() === y.getDate();
    },
    isSameMonth: function(year, month){
      var d = new Date();
      return i( year ) === d.getFullYear() &&
        i( month ) === d.getMonth();
    },
    isValidHour: function(h){
      return /^([01]?[0-9]|2[0-4]):[0-5][0-9]$/.test( h ) || h === '--:--';
    }
  };
});
