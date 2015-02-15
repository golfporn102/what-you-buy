angular.module('app').factory('apiWYB', function (messaging, $http) {
	
	var loadProductById = function (user_id, product_id) {
		user_id = 1;	
		var url = '/api/'+ user_id + '/product/' + product_id;
		
		$http.get(url).
	  		success(function(data, status, headers, config) {

	    	messaging.publish('LOAD_PRODUCT_SUCCESS', data);
	  	}).
	  	error(function(data, status, headers, config) {
	    	
	  	});
	};

	return {
		loadProductById : loadProductById
	};


});
