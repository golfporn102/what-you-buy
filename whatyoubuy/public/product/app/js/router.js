angular.module('app').config( function( $stateProvider, $urlRouterProvider ) {
	
	$stateProvider
		.state('product' , {
			templateUrl: '/product/app/views/product.html',
			controller: 'ProductCrtl'
		})
		.state('product.id', {
			url: '/{id}' ,
			templateUrl: '/product/app/views/products_menu.html',
			controller: 'ProductListsCrtl'
		})
});