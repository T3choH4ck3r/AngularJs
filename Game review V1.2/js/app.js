var app = angular.module("myApp", ["ngRoute"]); // App declaration
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html",
    })
    .when("/Mobile", {
        templateUrl : "mobile.html",
        controller : "mainCtrl"
    })
    .when("/Computer", {
        templateUrl : "computer.html",
        controller : "mainCtrl"
    })
    .when("/Xbox", {
        templateUrl : "xbox.html",
        controller : "mainCtrl"
    })
    .when("/PS", {
        templateUrl : "playStation.html",
        controller : "mainCtrl"
    })
});

//Directive  template
app.directive('myElement', function () {
  return {
    scope: {
      item: '=myElement'
    },
    restrict: 'EA',
    template: '<span class="nav navbar-nav" id="directiveElement"><i class="{{item.icon}}" style="padding:1px;font-size: 30px;"></i><a href="#">{{ item.Title }}</a></span>'
  };
});