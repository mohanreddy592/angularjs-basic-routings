var myapp = angular.module('myapp', ['ui.router']);

myapp.component('app', {
    templateUrl: 'app-component.html',
    controller: 'MyAppCtrl'        
});

myapp.controller('MyAppCtrl', function(){

});
