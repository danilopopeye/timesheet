define([ 'router', 'models/options', 'views/index' ], function(Router, Options, Index){
  var view, options, year, month;

  options = new Options;

  options.destroy();

  view = new Index({
    model: options
  });

  describe('Index#View', function () {
    before(function(){
      if( ! Backbone.history ){
        Backbone.history = new Backbone.History;
        Backbone.history.start();
      }
    });

    after(function(){
      options.destroy();
    });

    it('should be a Backbone.View', function(){
      expect(view.$).to.be.a('function');
      expect(view.bind).to.be.a('function');
      expect(view._configure).to.be.a('function');
      expect(view._ensureElement).to.be.a('function');
    });

    it('should have template', function () {
      expect(view.template).to.be.a('string');
    });

    describe('#redirect', function(){
      it('should call view#render when doesn\'t have year or month saved', function(){
        view.$el.html('redirect content');
        options.destroy();
        view.redirect();

        expect( view.$el.html() ).not.equal('redirect content');
      });

      it('should navigate to view#findRoute when have saved year and month', function(){
        options.save({
          year: 1985,
          month: 12
        });
        view.redirect();

        expect( Backbone.history.fragment ).equal('!/1985/12/1');
      });
    });

    describe('#findRoute', function(){
      it('should return !/today for this month and year', function(){
        var d = new Date;
        expect(
          view.findRoute( d.getFullYear(), d.getMonth() )
        ).equal('!/today');
      });

      it('should return !/1985/12/1 for parameters 1985, 12', function(){
        expect( view.findRoute(1985, 12) ).equal('!/1985/12/1');
      });
    });

   describe('#change', function(){
     it('should save the model with input value', function(){
       options.on('change', function(a,b,c,d){
         expect( options.get('year') ).equal(1985);
         expect( options.get('month') ).equal(11);
       });

       view.$('input').val('1985-12');
       view.change();
     });
   });

    describe('#error', function(){
      it('should call view#render on "Record not found"', function(){
        view.$el.html('error content');
        view.error( null, 'Record not found' );
        expect( view.$el.html() ).not.equal('content');
      });

      it('should set the #message text', function(){
        view.error( null, 'message' );
        expect( view.$('#message').text() ).equal('message');
      });
    });
  });
});
