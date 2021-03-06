// Custom Directive 
app.controller('EventType', function($scope) {
  $scope.EventType = [
    {
      Title: 'Arcade',
      icon: 'fas fa-bicycle'      
    },
    {
      Title: 'Action',
      icon: 'far fa-edit'     
    },
    {
      Title: 'Adventures',
      icon: 'fas fa-gamepad'     
    },
    {
      Title: 'strategy',
      icon: 'far fa-lightbulb'     
    }
  ];
}); 

// Main Controller

app.controller("mainCtrl",function ($scope){
    $scope.test='Test Mobile/PS';
    $scope.Games=[
        {
            "Id": "1",
            "Name": "Mini miltia",
            "Device": "Mobie",
            "Type": "Online",
            "numberOfPlayers": "Multi Player",
            "image":"/images/default-image.jpg",
            "Crowd":"20K"
        },
        {
            "Id": "2",
            "Name": "COD",
            "Device": "Computer",
            "Type": "Online",
            "numberOfPlayers": "Multi Player",
            "image":"/images/COD.jpg",
            "Crowd":"150K"
        },
        {
            "Id": "3",
            "Name": "FIFA",
            "Device": "PlayStation",
            "Type": "Online",
            "numberOfPlayers": "Multi Player",
            "image":"/images/FIFA.jpg",
            "Crowd":"50K"
        },
        {
            "Id": "4",
            "Name": "Asphalt 8",
            "Device": "Mobile",
            "Type": "Online",
            "numberOfPlayers": "Multi Player",
            "image":"/images/Asphalt 8.jpg",
            "Crowd":"80K"            
        },
        {
            "Id": "5",
            "Name": "FIFA Mobile",
            "Device": "Mobie",
            "Type": "Online",
            "numberOfPlayers": "Single Player",
            "image":"/images/Asphalt 8.jpg",
            "Crowd":"40K" 
        },
        {
            "Id": "6",
            "Name": "Clash royal",
            "Device": "Mobile",
            "Type": "Online",
            "numberOfPlayers": "Multi Player",
            "image":"/images/Clash Royale.jpg",
            "Crowd":"35K"
        },
        {
            "Id": "7",
            "Name": "Clash of Clans",
            "Device": "Mobile",
            "Type": "Online",
            "numberOfPlayers": "Multi Player",
            "image":"/images/Clash of Clans.jpg",
            "Crowd":"60K"
        },
        {
            "Id": "8",
            "Name": "Guns of boom",
            "Device": "Mobile",
            "Type": "Online",
            "numberOfPlayers": "Multi Player",
            "image":"/images/Guns of boom.jpg",
            "Crowd":"55K"
        },
        {
            "Id": "9",
            "Name": "Boom Beach",
            "Device": "Mobile",
            "Type": "Online",
            "numberOfPlayers": "Single Player",
            "image":"/images/Boom Beach.jpg",
            "Crowd":"45K"
           
        },
        {
            "Id": "10",
            "Name": "PES",
            "Device": "Mobile",
            "Type": "Online",
            "numberOfPlayers": "Multi Player",
            "image":"/images/PES.jpg",
            "Crowd":"33K"
        },
        {
            "Id": "11",
            "Name": "PES",
            "Device": "PlayStation",
            "Type": "Online",
            "numberOfPlayers": "Multi Player",
            "image":"/images/PES.jpg",
            "Crowd":"2K"
        },
        {
            "Id": "12",
            "Name": "PES",
            "Device": "XBOX",
            "Type": "Online",
            "numberOfPlayers": "Multi Player",
            "image":"/images/PES.jpg",
            "Crowd":"45K"
        },
        {
            "Id": "13",
            "Name": "PES",
            "Device": "Computer",
            "Type": "Online",
            "numberOfPlayers": "Multi Player",
            "image":"/images/PES.jpg",
            "Crowd":"30K"
        },
        {
            "Id": "14",
            "Name": "NFS",
            "Device": "Computer",
            "Type": "Online",
            "numberOfPlayers": "Multi Player",
            "image":"/images/NFS.jpg",
            "Crowd":"10M" 
        },
        {
            "Id": "15",
            "Name": "NFS",
            "Device": "PlayStation",
            "Type": "Online",
            "numberOfPlayers": "Multi Player",
            "image":"/images/NFS.jpg",
            "Crowd":"50K"
        },
        {
            "Id": "16",
            "Name": "NFS",
            "Device": "XBOX",
            "Type": "Online",
            "numberOfPlayers": "Multi Player",
            "image":"/images/NFS.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "17",
            "Name": "God Hand",
            "Device": "PlayStation",
            "Type": "Online",
            "numberOfPlayers": "Single Player",
            "image":"/images/default-image.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "18",
            "Name": "God of War",
            "Device": "PlayStation",
            "Type": "Offline",
            "numberOfPlayers": "Single Player",
            "image":"/images/God of War.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "19",
            "Name": "God of War",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Single Player",
            "image":"/images/God of War.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "20",
            "Name": "God of War",
            "Device": "XBOX",
            "Type": "Offline",
            "numberOfPlayers": "Single Player",
            "image":"/images/God of War.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "21",
            "Name": "UFC",
            "Device": "Mobie",
            "Type": "Online",
            "numberOfPlayers": "Single Player",
            "image":"/images/default-image.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "22",
            "Name": "UFC 2",
            "Device": "Computer",
            "Type": "Online",
            "numberOfPlayers": "Single Player",
            "image":"/images/default-image.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "23",
            "Name": "Assassin's Creed",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Single Player",
            "image":"/images/Assassin's Creed.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "24",
            "Name": "Assassin's Creed",
            "Device": "Mobile",
            "Type": "Offline",
            "numberOfPlayers": "Single Player",
            "image":"/images/Assassin's Creed.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "25",
            "Name": "Assassin's Creed",
            "Device": "XBOX",
            "Type": "Offline",
            "numberOfPlayers": "Single Player",
            "image":"/images/Assassin's Creed.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "26",
            "Name": "Rise of Nation",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Single Player",
            "image":"/images/default-image.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "27",
            "Name": "Rise of Nation",
            "Device": "Computer",
            "Type": "Online",
            "numberOfPlayers": "Multi Player",
            "image":"/images/default-image.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "28",
            "Name": "Age of Empire",
            "Device": "Computer",
            "Type": "Online",
            "numberOfPlayers": "Multi Player",
            "image":"/images/default-image.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "29",
            "Name": "Age of Empire",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Single Player",
            "image":"/images/default-image.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "30",
            "Name": "EA Cricket",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Multi Player",
            "image":"/images/default-image.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "31",
            "Name": "Don Bradmann Cricket",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Multi Player",
            "image":"/images/default-image.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "32",
            "Name": "Brain Lara Cricket",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Multi Player",
            "image":"/images/default-image.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "33",
            "Name": "Tom Raider",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Single Player",
            "image":"/images/default-image.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "34",
            "Name": "Tom Raider",
            "Device": "PlayStation",
            "Type": "Offline",
            "numberOfPlayers": "Single Player",
            "image":"/images/default-image.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "35",
            "Name": "Ghost Raider",
            "Device": "PlayStation",
            "Type": "Offline",
            "numberOfPlayers": "Single Player",
            "image":"/images/default-image.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "36",
            "Name": "Ghost Raider",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Single Player",
            "image":"/images/default-image.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "37",
            "Name": "NOVA",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Single Player",
            "image":"/images/default-image.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "38",
            "Name": "NOVA",
            "Device": "PlayStation",
            "Type": "Offline",
            "numberOfPlayers": "Single Player",
            "image":"/images/default-image.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "39",
            "Name": "Death Trigger",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Single Player",
            "image":"/images/default-image.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "40",
            "Name": "Death Trigger",
            "Device": "PlayStation",
            "Type": "Online",
            "numberOfPlayers": "Single Player",
            "image":"/images/default-image.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "41",
            "Name": "NOVA Legacy",
            "Device": "Mobile",
            "Type": "Offline",
            "numberOfPlayers": "Single Player",
            "image":"/images/default-image.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "42",
            "Name": "NOVA",
            "Device": "Mobile",
            "Type": "Online",
            "numberOfPlayers": "Single Player",
            "image":"/images/default-image.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "43",
            "Name": "Here Comes the Pain",
            "Device": "PlayStation",
            "Type": "Offline",
            "numberOfPlayers": "Multi Player",
            "image":"/images/default-image.jpg",
            "Crowd":"10K"
        },
        {
            "Id": "44",
            "Name": "WWE 2k12",
            "Device": "Mobile",
            "Type": "Offline",
            "numberOfPlayers": "Single Player",
            "image":"/images/default-image.jpg",
            "Crowd":"30K"
        },
        {
            "Id": "45",
            "Name": "WWE",
            "Device": "PlayStation",
            "Type": "Offline",
            "numberOfPlayers": "Multi Player",
            "image":"/images/default-image.jpg",
            "Crowd":"12K"
        },
        {
            "Id": "46",
            "Name": "WWE",
            "Device": "XBOX",
            "Type": "Offline",
            "numberOfPlayers": "Multi Player",
            "image":"/images/default-image.jpg",
            "Crowd":"23K"
        },
        {
            "Id": "47",
            "Name": "Watch dogs",
            "Device": "Computer",
            "Type": "Offline",
            "numberOfPlayers": "Single Player",
            "image":"/images/default-image.jpg",
            "Crowd":"33K"
        },
        {
            "Id": "48",
            "Name": "Watch dogs",
            "Device": "PlayStation",
            "Type": "Offline",
            "numberOfPlayers": "Single Player",
            "image":"/images/default-image.jpg",
            "Crowd":"3K"
        },
        {
            "Id": "49",
            "Name": "Watch dogs",
            "Device": "XBOX",
            "Type": "Offline",
            "numberOfPlayers": "Single Player",
            "image":"/images/default-image.jpg",
            "Crowd":"10k"
        },
        {
            "Id": "50",
            "Name": "Future Fight",
            "Device": "Mobile",
            "Type": "Offline",
            "numberOfPlayers": "Multi Player",
            "image":"/images/default-image.jpg",
            "Crowd":"2K"
        },
        {
            "Id": "51",
            "Name": "King Arthur",
            "Device": "PlayStation",
            "Type": "Offline",
            "numberOfPlayers": "Multi Player",
            "image":"/images/default-image.jpg",
            "Crowd":"2K"
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