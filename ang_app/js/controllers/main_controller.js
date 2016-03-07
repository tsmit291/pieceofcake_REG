app.controller('mainController', ['$scope', 'registryService',function($scope, registryService){
  console.log("we got here homie. you da best");
  registryService.getItems().then(function(results){
    console.log(results.data);
    $scope.registryCollection = results.data;
  })
}]);

// getItems from my allRegistry object- do this by calling the registryService. 
// then begin function and pass through results.
// registryCollection equals the data results from my allRegistry json object..
