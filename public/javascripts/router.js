define(['backbone', 'views/index'], function(Backbone, vIndex){
	return Backbone.Router.extend({
		routes: {
			'': 'index'
		},
		index: function(){
			new vIndex;
		}
	});
});
