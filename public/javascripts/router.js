define(['backbone'], function(Backbone){
	return Backbone.Router.extend({
		routes: {
			'': 'index'
		},
		index: function(){
			console.log('app.Router - index');
		}
	});
});
