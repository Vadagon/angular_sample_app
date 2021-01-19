var app = angular.module('app', ['ngMaterial', 'ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/home.html"
        })
        // .when("/pages/:id", {
        //     templateUrl: "pages/pages.html",
        //     controller: "sampleController"
        // })
        .otherwise({
            redirectTo: '/'
        });

});



app.run(function($rootScope, $location){

});



// app.controller('sampleController', function($scope, $location, $routeParams, $rootScope) {

// })



app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
