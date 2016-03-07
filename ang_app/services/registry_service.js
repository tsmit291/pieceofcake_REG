app.service("registryService", function($http){
  var registryService = {};

  registryService.getItems = function(){
    return $http.get("http://localhost:3000/registries", {method: "jsponp"});
    // return $http.get("https://pieceofcake.firebaseapp.com/#/", {method: "jsonp"});
  }
  return registryService;
});
