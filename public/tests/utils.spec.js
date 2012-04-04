define([ 'utils' ], function(Utils){
  describe('Utils', function(){
    describe('#isDate', function(){
      it('should test for a Date object', function(){
        expect( Utils.isDate( new Date ) ).to.be.ok;
        expect( Utils.isDate( null ) ).to.not.be.ok;
      });
    });

    describe('#getLastDay', function(){
      it('should return the last day of a month', function(){
        var lastDay = Utils.getLastDay(2012, 1);
        expect(lastDay).to.be.a('number');
        expect(lastDay).to.equal(29);
      });
      it('should return NaN when wrong parameters', function(){
        expect( Utils.getLastDay(2012, {}) ).to.satisfy(function(nan){
          return isNaN( nan );
        });
      });
    });

    describe('#getMonthName', function(){
      it('should return the month name by index', function(){
        expect( Utils.getMonthName(0) ).equal('January');
      });

      it('should return a empty string when not between 0 and 11', function(){
        expect( Utils.getMonthName(null) ).equal('');
      });
    });

    describe('#getDayName', function(){
      it('should return the day name by index', function(){
        expect( Utils.getDayName(0) ).equal('Sunday');
      });

      it('should return a empty string when not between 0 and 6', function(){
        expect( Utils.getDayName(null) ).equal('');
      });
    });

    describe('#getDayAbbr', function(){
      it('should return the day name by index', function(){
        expect( Utils.getDayName(0) ).equal('Sunday');
      });

      it('should return a empty string when not between 0 and 6', function(){
        expect( Utils.getDayName(null) ).equal('');
      });
    });

    describe('#isSameDay', function(){
      var day = new Date(1985, 12, 26, 12, 34, 56);

      it('should return true if is the same day', function(){
        expect(
          Utils.isSameDay(day, new Date( 1985, 12, 26))
        ).to.be.true;
      });

      describe('should return false when', function(){
        it('dates aren\'t the same day', function(){
          expect(
            Utils.isSameDay(day, new Date)
          ).to.be.false;
        });
        it('arguments aren\'t Date objects', function(){
          expect(
            Utils.isSameDay(day)
          ).to.be.false;
          expect(
            Utils.isSameDay({}, day)
          ).to.be.false;
        });
      });
    });

    describe('#isSameMonth', function(){
      it('should return true if is this month and year', function(){
        var d = new Date();

        expect(
          Utils.isSameMonth(d.getFullYear(), d.getMonth())
        ).to.be.true;
      });
      it('should return false when isn\'t this month and year', function(){
        expect( Utils.isSameMonth(1985, 12) ).to.be.false;
      });
    });

    describe('#isValidHour', function(){
      describe('should return true when', function(){
        it('is a valid hour', function(){
          expect( Utils.isValidHour('12:34') ).to.be.true;
        });
        it('is --:-- placeholder', function(){
          expect( Utils.isValidHour('--:--') ).to.be.true;
        });
      });

      it('should return false when isn\'t --:-- or a valid date', function(){
        expect( Utils.isValidHour('98:76') ).to.be.false;
      });
    });
  });
});
