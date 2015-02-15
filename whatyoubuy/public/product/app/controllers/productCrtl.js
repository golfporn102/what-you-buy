angular.module('app')

.controller('ProductCrtl', function ($scope, apiWYB, messaging) {
	
})

.controller('ProductListsCrtl', function ($scope, $state, messaging, $stateParams, apiWYB) {
	
	var _product_id = $stateParams.id;
	apiWYB.loadProductById( 1, _product_id );
	
	$scope.loadProductById_onclick = function (product_id) {
		$state.go('product.id', {'id':product_id });
	};


})

.controller('ProductShowCtrl', function ($scope, messaging) {
	
	var loadProductById = function (data) {
		$scope.product = data;
		console.log($scope.product);
	};

	messaging.subscribe('LOAD_PRODUCT_SUCCESS', loadProductById );
})