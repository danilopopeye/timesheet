define([ 'backbone', 'router' ], function(Backbone, Router){
  var
    lastRoute = null,
    lastArgs = null,
    r = new Router();

  Backbone.history.start();
  Backbone.history.on('route', function(router, path, args){
    lastRoute = path; lastArgs = args;
  });

  function go(route){
    Backbone.history.navigate(route, true);
  }

  describe('Router', function(){
    it('should be a Backbone.Router', function(){
      expect(r.navigate).to.be.a('function');
      expect(r.route).to.be.a('function');
      expect(r.routes).to.be.a('object');
    });

    beforeEach(function(){
      go('!/dummy');
      lastRoute = null;
      lastArgs = null;
    });

    describe('#index', function(){
      it('should be a function', function(){
        expect(r.index).to.be.a('function');
      });

      it('should be called on /', function(){
        go('');
        expect(lastRoute).equal('index');
      });

      it('should be called on !/index', function(){
        go('!/index');
        expect(lastRoute).equal('index');
      });
    });

    describe('#main', function(){
      it('should be a function', function(){
        expect(r.index).to.be.a('function');
      });

      it('should be called on !/1985/12/26', function(){
        go('!/1985/12/26');
        expect(lastRoute).equal('main');
      });
    });

    describe('#clear', function(){
      it('should be a function', function(){
        expect(r.index).to.be.a('function');
      });

      it('should be called on !/clear', function(){
        go('!/clear');
        expect(lastRoute).equal('clear');
      });
    });

    describe('#today', function(){
      it('should be a function', function(){
        expect(r.index).to.be.a('function');
      });

      it('should be called on !/today', function(){
        go('!/today');
        expect(lastRoute).equal('today');
      });
    });
  });
});
