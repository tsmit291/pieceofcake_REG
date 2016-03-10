var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: './partials/home.html',
  })
  .when('/about', {
    templateUrl: './partials/about.html',
  })
  .when('/categories', {
    templateUrl: './partials/categories.html',
  })
  .when('/registries', {
    templateUrl: './partials/registries.html',
    controller: 'mainController'
  })
  .when('/registries/new', {
    templateUrl: './partials/new.html',
    controller: 'registriesController'
  })
});

// remember no hashes on your routes.
