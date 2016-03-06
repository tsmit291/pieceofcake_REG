var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: './partials/home.html',
    controller: 'mainController'
  })
  // .when('/about', {
  //   templateUrl: './partials/about.html',
  //   controller: 'aboutController'
  // })
  // .when('/contact', {
  //   templateUrl: './partials/contact.html',
  //   controller: 'contactController'
  // })
  .when('/registries', {
    templateUrl: './partials/registries.html',
    controller: 'registriesController'
  })
});
