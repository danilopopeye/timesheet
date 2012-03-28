define([ 'app' ], function(app){
  describe('App', function(){
    it('to have a initialize method', function(){
      expect(app.initialize).to.exists;
    });

    it('initialize to be a function', function(){
      expect(app.initialize).to.be.a('function');
    });
  });
});
