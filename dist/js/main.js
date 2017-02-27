var app = angular.module("helloapp",['ngMap']);

app.controller("helloappctrl", function($scope,$http,NgMap){
  $scope.app = 'Hello world!';

  $scope.users = []; $http.get("http://jsonplaceholder.typicode.com/users")
  .success(function(data){
    $scope.users = data;
  })
  .error(function(err){
    console.log('API não carregada');
  });

  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });

  $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
});
