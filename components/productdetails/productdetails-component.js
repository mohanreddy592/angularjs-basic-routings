myapp.component('productDetails', {
    templateUrl: 'components/productdetails/productdetails-component.html',
    controller: 'ProductDetailsCtrl',
    bindings: {
        product: '<'
    }
});

myapp.controller('ProductDetailsCtrl', function(){
    
});
