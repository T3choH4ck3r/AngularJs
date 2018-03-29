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

app.factory('myService', function($http) {
  var promise;
  var myService = {
    async: function() {
      if ( !promise ) {
        // $http returns a promise, which has a then function, which also returns a promise
        promise = $http.get('/JSON/gamesData.json').then(function (response) {
          // The then function here is an opportunity to modify the response
          console.log(response);
          // The return value gets picked up by the then in the controller.
          return response.data;
        });
      }
      // Return the promise to the controller
      return promise;
    }
  };
  return myService;
});

//Controller 
app.controller('mainCtrl',function(myService,$scope){
  myService.async().then(function(d) {
  $scope.Games=d;

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
});