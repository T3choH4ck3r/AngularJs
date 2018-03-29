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
        controller : "computerCtrl"
    })
    .when("/Xbox", {
        templateUrl : "xbox.html",
        controller : "xboxCtrl"
    })
    .when("/PS", {
        templateUrl : "playStation.html",
        controller : "playStationCtrl"
    })
});



/* Controller part*/
/*app.controller("mainCtrl", function ($scope) {
    $scope.msg = "Mobile Games";
});*/
app.controller("computerCtrl", function ($scope) {
    $scope.msg = "Computer Games";
});
app.controller("xboxCtrl", function ($scope) {
    $scope.msg = "Xbox Games";
});
app.controller("playStationCtrl", function ($scope) {
    $scope.msg = "playStation Games";
    $scope.Games=[
        {
            "Id": "3",
            "Name": "FIFA",
            "Device": "PlayStation",
            "Type": "Online",
            "numberOfPlayers": "Multi Player"
        }
    ]
});
app.controller("mainCtrl",function ($scope){
    $scope.test='Test Mobile/PS';
    $scope.Games=[
        {
            "Id": "1",
            "Name": "Mini miltia",
            "Device": "Mobie",
            "Type": "Online",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "2",
            "Name": "COD",
            "Device": "Computer",
            "Type": "Online",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "3",
            "Name": "FIFA",
            "Device": "PlayStation",
            "Type": "Online",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "4",
            "Name": "Asphalt 8",
            "Device": "Mobile",
            "Type": "Online",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "5",
            "Name": "FIFA Mobile",
            "Device": "Mobie",
            "Type": "Online",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "6",
            "Name": "Clash royal",
            "Device": "Mobile",
            "Type": "Online",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "7",
            "Name": "Clash of Clans",
            "Device": "Mobie",
            "Type": "Online",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "8",
            "Name": "Guns of boom",
            "Device": "Mobile",
            "Type": "Online",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "9",
            "Name": "Boom Beach",
            "Device": "Mobie",
            "Type": "Online",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "10",
            "Name": "PES",
            "Device": "Mobile",
            "Type": "Online",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "11",
            "Name": "PES",
            "Device": "PlayStation",
            "Type": "Online",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "12",
            "Name": "PES",
            "Device": "XBOX",
            "Type": "Online",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "13",
            "Name": "PES",
            "Device": "Computer",
            "Type": "Online",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "14",
            "Name": "NFS",
            "Device": "Computer",
            "Type": "Online",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "15",
            "Name": "NFS",
            "Device": "PlayStation",
            "Type": "Online",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "16",
            "Name": "NFS",
            "Device": "XBOX",
            "Type": "Online",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "17",
            "Name": "God Hand",
            "Device": "PlayStation",
            "Type": "Online",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "18",
            "Name": "God of War",
            "Device": "PlayStation",
            "Type": "Offline",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "19",
            "Name": "God of War",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "20",
            "Name": "God of War",
            "Device": "XBOX",
            "Type": "Offline",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "21",
            "Name": "UFC",
            "Device": "Mobie",
            "Type": "Online",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "22",
            "Name": "UFC 2",
            "Device": "Computer",
            "Type": "Online",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "23",
            "Name": "Assassin's Creed",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "24",
            "Name": "Assassin's Creed",
            "Device": "Mobile",
            "Type": "Offline",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "25",
            "Name": "Assassin's Creed",
            "Device": "XBOX",
            "Type": "Offline",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "26",
            "Name": "Rise of Nation",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "27",
            "Name": "Rise of Nation",
            "Device": "Computer",
            "Type": "Online",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "28",
            "Name": "Age of Empire",
            "Device": "Computer",
            "Type": "Online",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "29",
            "Name": "Age of Empire",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "30",
            "Name": "EA Cricket",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "31",
            "Name": "Don Bradmann Cricket",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "32",
            "Name": "Brain Lara Cricket",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "33",
            "Name": "Tom Raider",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "34",
            "Name": "Tom Raider",
            "Device": "PlayStation",
            "Type": "Offline",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "35",
            "Name": "Ghost Raider",
            "Device": "PlayStation",
            "Type": "Offline",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "36",
            "Name": "Ghost Raider",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "37",
            "Name": "NOVA",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "38",
            "Name": "NOVA",
            "Device": "PlayStation",
            "Type": "Offline",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "39",
            "Name": "Death Trigger",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "40",
            "Name": "Death Trigger",
            "Device": "PlayStation",
            "Type": "Online",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "41",
            "Name": "NOVA Legacy",
            "Device": "Mobile",
            "Type": "Offline",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "42",
            "Name": "NOVA",
            "Device": "Mobile",
            "Type": "Online",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "43",
            "Name": "Here Comes the Pain",
            "Device": "PlayStation",
            "Type": "Offline",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "44",
            "Name": "WWE 2k12",
            "Device": "Mobile",
            "Type": "Offline",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "45",
            "Name": "WWE",
            "Device": "PlayStation",
            "Type": "Offline",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "46",
            "Name": "WWE",
            "Device": "XBOX",
            "Type": "Offline",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "47",
            "Name": "Watch dogs",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "48",
            "Name": "Watch dogs",
            "Device": "PlayStation",
            "Type": "Offline",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "49",
            "Name": "Watch dogs",
            "Device": "XBOX",
            "Type": "Offline",
            "numberOfPlayers": "Single Player"
        },
        {
            "Id": "50",
            "Name": "Future Fight",
            "Device": "Mobile",
            "Type": "Offline",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "51",
            "Name": "King Arthur",
            "Device": "PlayStation",
            "Type": "Offline",
            "numberOfPlayers": "Multi Player"
        }
    ]
    // Filter function
    // Function for type filter
  $scope.gameType = (function() {
    var gameType = [];
    for (var i = 0; i < $scope.Games.length; i++) {
      if (gameType.indexOf($scope.Games[i].Type) === -1) {
        gameType.push($scope.Games[i].Type);
      }
    }
    return gameType;
  })();

  // Function for Player filter
  $scope.gamePlayers = (function() {
    var gamePlayers = [];
    for (var i = 0; i < $scope.Games.length; i++) {
      if (gamePlayers.indexOf($scope.Games[i].numberOfPlayers) === -1) {
        gamePlayers.push($scope.Games[i].numberOfPlayers);
      }
    }
    return gamePlayers;
  })();

  $scope.Filter = {};
});



// JSON Data
 var Games = [
        {
            "Id": "1",
            "Name": "Mini miltia",
            "Device": "Mobie",
            "Type": "Online",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "2",
            "Name": "COD",
            "Device": "Computer",
            "Type": "Online",
            "numberOfPlayers": "Multi Player"
        },
        {
            "Id": "3",
            "Name": "FIFA",
            "Device": "PlayStation",
            "Type": "Online",
            "numberOfPlayers": "Multi Player"
        }
    ]
