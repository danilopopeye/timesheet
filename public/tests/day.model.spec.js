define([ 'models/day', 'localstorage' ], function(Day, Store){
  describe('Day', function () {
    before(function(){
      this.day = new Day();
      this.day.localStorage = new Store('test');
    });

    it('should have defaults', function(){
      var attr = this.day.toJSON();

      // can't compare new Date
      attr.date = null;

      expect( attr ).eql({
        date: null,
        entrance: '--:--',
        minimum: '--:--',
        regular: '--:--',
        maximum: '--:--',
        exit: '--:--'
      });
    });

    describe('#today', function () {
      it('should return true when date is today', function(){
        expect( this.day.today() ).to.be.true;
      });

      it('should return false when date isn\'t today', function(){
        var d = new Day({
          date: new Date(1986, 26, 12)
        });

        expect( d.today() ).to.be.false;
      });
    });

    describe('#validate', function(){
      beforeEach(function(){
        this.day = new Day();
        this.day.localStorage = new Store('test');
      });

      describe('the entrance', function(){
        describe('should be valid', function(){
          it('when --:--', function(){
            this.day.set('entrance', '--:--');
            expect( this.day.isValid() ).to.be.true;
          });

          it('when hh:mm', function(){
            this.day.set('entrance', '12:34');
            expect( this.day.isValid() ).to.be.true;
          });

          describe('should update the fields', function(){
            beforeEach(function(){
              this.day.set('entrance', '00:00');
            });

            it('#minimum to +9h33', function(){
              expect( this.day.get('minimum') ).equal('09:33');
            });

            it('#regular to +9h48', function(){
              expect( this.day.get('regular') ).equal('09:48');
            });

            it('#minimum to +10h03', function(){
              expect( this.day.get('maximum') ).equal('10:03');
            });
          });
        });

        it('should be invalid when not hh:mm or --:--', function(){
          var isValid = this.day.set('entrance', 'wrong');
          expect( isValid ).to.be.false;
        });
      });

      describe('the exit', function(){
        describe('should be valid', function(){
          it('when --:--', function(){
            this.day.set('exit', '--:--');
            expect( this.day.isValid() ).to.be.true;
          });

          it('when hh:mm', function(){
            this.day.set('exit', '12:34');
            expect( this.day.isValid() ).to.be.true;
          });
        });

        it('should be invalid when not hh:mm or --:--', function(){
          var isValid = this.day.set('exit', 'wrong');
          expect( isValid ).to.be.false;
        });
      });
    });
  });
});
