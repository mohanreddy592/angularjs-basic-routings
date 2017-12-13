myapp.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state({
        name: 'home',
        url: '/home',
        component: 'home'
    });
    $stateProvider.state({
        name: 'about',
        url: '/about',
        component: 'about'
    });
    $stateProvider.state({
        name: 'contact',
        url: '/contact',
        component: 'contact'
    });
    $stateProvider.state({
        name: 'products',
        url: '/products',
        component: 'productList',
        resolve: {
            items: function(ProductService){
                return ProductService.getProducts();                                
            }
        }
    });
    $stateProvider.state({
        name: 'details',
        url: '/productdetails/{productId}',
        component: 'productDetails',
        resolve: {
            product: function(ProductService, $transition$){
                var currentProductId = $transition$.params().productId;
                return ProductService.getProductDetails(currentProductId);
            }
        }
    });
    $urlRouterProvider.otherwise('home');
});