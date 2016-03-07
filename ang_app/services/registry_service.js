app.service("registryService", function($http){
  var allRegistry = {};

  allRegistry.getItems = function(){
    return $http.get("http://localhost:3000/registries", {method: "jsponp"});
    // return $http.get("https://pieceofcake.firebaseapp.com/#/", {method: "jsonp"});
  }
  return allRegistry;
});


// get request to my express server. fetch and return my json object (allRegistry)
// TODO: once deployed, return the firebase http.get not the localhost.
