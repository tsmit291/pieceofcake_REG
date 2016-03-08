app.controller('registriesController', ['$scope', 'registryService', function($scope, registryService){

  $scope.newItem = function() {
    console.log('adding an item to our list');
    registryItem = {};
    registryItem.item = $scope.item;
    registryItem.category = $scope.category;
    registryItem.price = $scope.price;
    registryItem.quantity = $scope.quantity;

  $http.post("http://localhost:3000/registries", {method: "jsonp"});
  }
}])
