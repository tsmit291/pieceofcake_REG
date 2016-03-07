// get registry on page
// http lets us link to our json file, $q is to defer our promise
app.service('registryService', ['$http', '$q', function($http, $q){
  var deferred = $q.defer();
  $http.get('https://pieceofcake-reg.herokuapp.com/').then(function (data){
    deferred.resolve(data);
  });
  // says i want to do this later (a promise)
  // deferred.resolve resolves the data later
  this.getTea = function (){
    return deferred.promise;

  }
}]);
