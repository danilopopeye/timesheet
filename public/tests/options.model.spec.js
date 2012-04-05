define([ 'models/options' ], function(options){
  describe('Options', function(){
    before(function(){
      this.o = new options;
      this.invalid = {
        year: 'year',
        month: null
      };
    });

    it('should have defaults', function(){
      expect( this.o.attributes ).eql({
        id: 'timesheet-options',
        month: null,
        year: null
      });
    });

    describe('#text', function(){
      it('should return year-month', function(){
        this.o.set({
          year: 1985,
          month: 12
        });

        expect( this.o.text() ).equal('1985-12');
      });
    });

    describe('#validate', function(){
      it('should save when entered numeric values', function(){
        this.o.set({
          year: 1985,
          month: 12
        });

        expect( this.o.isValid() ).to.be.true;
      });

      describe('when not numeric value entered', function(){
        beforeEach(function(){
          this.o.clear({
            silent: true
          });
        });

        it('should\'t be valid', function(){
          this.o.set( this.invalid );
          expect( this.o.isValid() ).to.be.false;
        });

        it('should trigger error event', function(){
          this.o.on('error', function(model, message){
            expect( this.o.isValid() ).to.be.false;
          }, this);

          this.o.set( this.invalid );
        });
      });
    });
  });
});
