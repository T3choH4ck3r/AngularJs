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
app.directive('myElement', function(){
  //  data=
   /* link=function link($scope,element,attributes){
        $scope.results=$scope.EventType;
        }
    alert(link);*/
  
  function link($scope,element,attributes){
        $scope.results=$scope.EventType;
        }
    return{        
        link:link,
        templateUrl:'directiveTemplate.html'
        //template: '<ul><li ng-repeat="x in results" style="list-style:none;float:left;padding:2px"><i class="{{x.icon}}" style="padding:1px;font-size: 30px;"></i><a href="#">{{ x.Title }}</a></li></ul>', 
        }
    }
);