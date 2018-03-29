angular
	.module('app',["ngRoute"])
		.controller('mainController',function($scope){
			
	$scope.services = {};
    $scope.platforms = {};
    $scope.resources = {};
    var allServices = [{
        Id: 1,
        ServiceType: "Cloud"
    }, {
        Id: 2,
        ServiceType: "Server"
    }];
    var allPlatforms = [{
        Id: 1,
        PlatformName: "AX",
        ServiceId: 1
    }, {
        Id: 2,
        PlatformName: "CRM",
        ServiceId: 1
    }, {
        Id: 3,
        PlatformName: "SharePoint",
        ServiceId: 1
    },
    {
        Id: 4,
        PlatformName: "AX",
        ServiceId: 2
    }, {
        Id: 5,
        PlatformName: "CRM",
        ServiceId: 2
    }, {
        Id: 6,
        PlatformName: "GP",
        ServiceId: 2
    }, {
        Id: 7,
        PlatformName: "Nav",
        ServiceId: 2
    }];
    var allResources = [{
        Id: 1,
        YearOfExperiance: 3,
        PlatformId: 1
    }, {
        Id: 2,
        YearOfExperiance: 2,
        PlatformId: 2
    }, {
        Id: 3,
        YearOfExperiance: 4,
        PlatformId: 3
    }, {
        Id: 4,
        YearOfExperiance: 3,
        PlatformId: 4
    }, {
        Id: 5,
        YearOfExperiance: 4,
        PlatformId: 5
    }, {
        Id: 6,
        YearOfExperiance: 4,
        PlatformId: 6
    }, {
        Id: 7,
        YearOfExperiance: 3,
        PlatformId: 7
    }];

    $scope.Services = allServices;

    $scope.$watch('services', function () {
        $scope.Platforms = allPlatforms.filter(function (s) {
            return s.ServiceId == $scope.services.Id;
        });
        $scope.platforms = {};
        $scope.resources = {};
        $scope.Resources = [];
    });

    $scope.$watch('platforms', function () {
        $scope.Resources = allResources.filter(function (c) {
            return c.PlatformId == $scope.platforms.Id;
        });
        $scope.resources = {};
    });

	}).config(function($routeProvider) {
		    $routeProvider
		    .when("/Details/:Id", {
		        templateUrl : "Details.html"
		    })
		});

		/*
		app.config(['$routeProvider',function($routeProvider) {
		    $routeProvider
		    .when("/Details", {
		        templateUrl : "/Details.html"
		    })
		});*/