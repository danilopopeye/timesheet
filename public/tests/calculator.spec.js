define([ 'calculator' ], function(calc){
  describe('Calculator', function(){
    before(function(){
      this.time = '00:00';
    });

    describe('#minTime', function(){
      it('should be 9h33 after time', function(){
        expect( calc.minTime(this.time) ).equal('09:33');
      });
    });

    describe('#regularTime', function(){
      it('should be 9h48 after time', function(){
        expect( calc.regularTime(this.time) ).equal('09:48');
      });
    });

    describe('#maxTime', function(){
      it('should be 10h03 after time', function(){
        expect( calc.maxTime(this.time) ).equal('10:03');
      });
    });
  });
});
