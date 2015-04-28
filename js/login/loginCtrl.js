var app = angular.module('desktop');

app.controller('loginCtrl', function($scope){
  
$scope.contacts = [
    { name: 'Section Name'},
  ];

    $scope.myVar = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };

    $scope.lists = [];

    $scope.newListItem = function(){

      $scope.lists.push({name:$scope.name, url:$scope.url});
      $scope.name = '';
      $scope.url = '';
    };


})