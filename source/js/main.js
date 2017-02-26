angular.module('helloapp',[])

angular.module('helloapp').controller('helloappctrl', function($scope,$http){
  $scope.app = 'Hello world!';

  $http.get('http://jsonplaceholder.typicode.com/users').then(sucessocalback,errocalback);
  function sucessocalback(data){
    console.log(data);
  }
  function errocalback(error){
    console.log('API não carregada.');
  }
})
