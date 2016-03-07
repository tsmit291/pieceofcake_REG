app.controller('mainController', ['$scope', 'registryService', function($scope, registryService){
  registryService.getItems().then(function(results){
    console.log(results);
    $scope.registryCollection = results.data;
  })
}]);
