myapp.component('productList', {
    templateUrl: 'components/productlist/productlist-component.html',
    controller: 'ProductListCtrl',
    bindings: {
        items: '<'
    }
});

myapp.controller('ProductListCtrl', function(){   
});
