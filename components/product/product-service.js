myapp.service('ProductService', function($http, $q){
    this.getProducts = function() {
        var defer = $q.defer();
        $http.get('components/product/products.json')
            .then(function(res){
                defer.resolve(res.data);
        });
        return defer.promise;
    };
    this.getProductDetails = function(productId) {
        var defer = $q.defer();
        $http.get('components/product/products.json')
            .then(function(res){
                var product = res.data.find(function(item){
                    return item.id==productId;
                });
                defer.resolve(product);
        });
        return defer.promise;
    }
});