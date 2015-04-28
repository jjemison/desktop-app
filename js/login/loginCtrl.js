var app = angular.module('desktop');

app.controller('loginCtrl', function($scope){
  
// $scope.contacts = [
//     { name: 'Section Name'},
//     { name: 'This name'}
//   ];
$scope.default = "This section"
 
  $scope.lists = [];
  $scope.newListItem = function(section, name, url, index){
    console.log(name, url, index)
    var newListItem = {name:name, url:url}
    if(!$scope.theSection[index]){
      $scope.theSection[index] = []
    }
    $scope.theSection[index].push(newListItem);
    console.log($scope.theSection)
    // $scope.lists.push({name:$scope.name, url:$scope.url});
    $scope.name[index] = '';
    $scope.url[index] = '';
  };

 $scope.sections = [];
 $scope.name = [];
 $scope.url = [];
 $scope.theSection = {}
 $scope.sections.push($scope.theSection)

 $scope.newSection = function() {
  $scope.sections.push($scope.theSection)
}

  

})