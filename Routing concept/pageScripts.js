var app=angular.module("myApp",["ngRoute"]);
	app.controller("myController",function($scope){
		$scope.employeeName="";
		$scope.employeeEmail="";
		$scope.employeeUserName="";
		$scope.pswd="";
		$scope.cnfrmPswd="";
	});
	app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
        templateUrl : "home.html",
        controller : "myController"
    })
    .when("/SignupForm", {
        templateUrl : "SignupForm.html",
        controller : "myController"
    })
    .when("/EmployeeDetails", {
        templateUrl : "EmployeeDetails.html",
        controller : "myController"
    })
});