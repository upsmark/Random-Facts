var app = angular.module('randomMessages');

app.controller('myController', function($scope, $http){

  $http.get('/randomfacts').then(function(response){

console.log(response.data);
$scope.messages = (response.data);

  });

});

console.log("working");
