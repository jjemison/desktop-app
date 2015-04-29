var app = angular.module('desktop');

app.controller('loginCtrl', function($scope){
  
  $scope.sections = [{
    title: 'Test',
    list: [{
      siteName: 'test Site Name',
      url: 'test url'
    }]
  }];


  $scope.newListItem = function(section, siteName, url, index){
    var newListItem = {siteName:name, url:url}
    if(!$scope.sections[index]){
      $scope.sections[index] = []
    }
    $scope.sections[index].push(newListItem);
    // $scope.lists.push({name:$scope.name, url:$scope.url});
    $scope.siteName[index] = '';
    $scope.url[index] = '';

  };

  $scope.newSection = function() {
    $scope.sections.push($scope.sections)
  }

 
// sections: [{
//   title: 'Section Title'
//   list: [{
//     siteName: 'Some Site',
//     url: 'www.somethin'
//   }]
// },{
//   title: 'Section Title'
//   list: [{
//     siteName: 'Some Site',
//     url: 'www.somethin'
//   },{
//     siteName: 'Site Two',
//     url: 'hello.com'
//   }]
// }]





})