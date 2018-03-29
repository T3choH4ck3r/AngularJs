 angular
            .module('firstApplication', ['ngMaterial'])
            .controller('sideNavController', Controller);

         /*function fnservice ($scope, $mdSidenav) {
            $scope.openLeftMenu = function() {
               $mdSidenav('left').toggle();               
               $scope.listItems=[{id:0,Dept:'Dynamics'},{id:1,Dept:'Nav'},{id:2,Dept:'GP'},{id:3,Dept:'CRM'}];
               $scope.platForm = {
        pf01 : {brand : "Dynamics", exp: 2, color : "red"},
        pf02 : {brand : "Nav", exp : 3, color : "white"},
        pf03 : {brand : "GP", exp : 3, color : "black"},
        pf04 : {brand : "CRM", exp : 3}
    }
            };
            $scope.close=function(){           	
            $mdSidenav('left').toggle();
            }
            }*/
    function Controller($scope,$mdSidenav) {
    $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
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
        Name:"Franscis",
        src:"./images/image1.jpg",
        YearOfExperiance: 3,
        PlatformId: 1
    }, {
        Id: 2,
        Name:"LeBron",
        src:"./images/image2.png",
        YearOfExperiance: 2,
        PlatformId: 2
    }, {
        Id: 3,
        Name:"James",
        src:"./images/image3.png",
        YearOfExperiance: 4,
        PlatformId: 3
    }, {
        Id: 4,
        Name:"Harden",
        src:"./images/image1.jpg",
        YearOfExperiance: 3,
        PlatformId: 4
    }, {
        Id: 5,
        Name:"Thompson",
        src:"./images/image2.png",
        YearOfExperiance: 4,
        PlatformId: 5
    }, {
        Id: 6,
        Name:"Stepen",
        src:"./images/image3.png",
        YearOfExperiance: 4,
        PlatformId: 6
    }, {
        Id: 7,
        Name:"Curry",
        src:"./images/image1.jpg",
        YearOfExperiance: 3,
        PlatformId: 7
    },{
        Id: 8,
        Name:"Bale",
        src:"./images/image2.png",
        YearOfExperiance: 2,
        PlatformId: 1
    }, {
        Id: 9,
        Name:"Irving",
        src:"./images/image3.png",
        YearOfExperiance: 4,
        PlatformId: 2
    }, {
        Id: 10,
        Name:"Druant",
        src:"./images/image1.jpg",
        YearOfExperiance: 5,
        PlatformId: 3
    }, {
        Id: 11,
        Name:"Jordern",
        src:"./images/image2.png",
        YearOfExperiance: 2,
        PlatformId: 4
    }, {
        Id: 12,
        Name:"Russell",
        src:"./images/image3.png",
        YearOfExperiance: 3,
        PlatformId: 5
    }, {
        Id: 13,
        Name:"Cena",
        src:"./images/image1.jpg",
        YearOfExperiance: 2,
        PlatformId: 6
    }, {
        Id: 14,
        Name:"Justin",
        src:"./images/image2.png",
        YearOfExperiance: 5,
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
        $scope.close=function(){            
            $mdSidenav('left').toggle();
        }
    }
}  