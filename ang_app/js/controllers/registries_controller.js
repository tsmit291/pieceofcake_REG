app.controller('registriesController', ['$scope', 'registryService', '$http', function($scope, registryService, $http){

  $scope.newItem = function() {
    console.log('adding an item to our list');
    registryItem = {};
    registryItem.item = $scope.item;
    registryItem.category = $scope.category;
    registryItem.price = $scope.price;
    registryItem.quantity = $scope.quantity;
    console.log($http);

  $http.post("http://localhost:3000/registries", registryItem);
  }
}])
    
