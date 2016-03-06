app.controller('mainController', ['$scope', 'registryService', function($scope, registryService){

  var promise = registryService.getRegistry();
  $scope.myRegistry = registryService.registry;
  $scope.add = registryService.add;

  promise.then(function(collection){
// whatever results are from promise (once it is resolved) this gets set equal to my registry and then I call it.
    $scope.regCollection = collection.data;
  });
}]);
