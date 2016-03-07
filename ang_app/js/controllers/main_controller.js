app.controller('mainController', ['$scope', 'registryService',function($scope, registryService){
  console.log("we got here homie. you da best");
  registryService.getItems().then(function(results){
    console.log(results.data);
    $scope.kitchen = [];
    $scope.living = [];
    $scope.outdoor = [];
    for(var i = 0; i < results.data.length; i++){
      if (results.data[i]["category"] === "kitchen" ){
        $scope.kitchen.push(results.data[i]);
      } else if (results.data[i]["category"] === "living"){
        $scope.living.push(results.data[i]);
      } else {
        $scope.outdoor.push(results.data[i]);
    }
  }
  $scope.registryCollection = results.data;
  })
}]);

// getItems from my allRegistry object- do this by calling the registryService.
// then begin function and pass through results.
// registryCollection equals the data results from my allRegistry json object..
//TODO: a. for each index in our results.data array, loop through and check to see what category each item is in.
