var app = angular.module('desktop', ['ngRoute']);


app.config(function($routeProvider){
  $routeProvider
  .when('/signup', {
      templateUrl: 'js/signup/signup.html',
      controller: 'signupCtrl'//After this step automatically go and create the controller!!
    })
  .otherwise({
        redirectTo: '/login'
      });


});

