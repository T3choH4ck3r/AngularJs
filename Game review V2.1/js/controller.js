app.factory('myService1', function($http) {
  var promise;
  var myService = {
    async: function() {
      if ( !promise ) {
        
        promise = $http.get('/JSON/gamesData.json').then(function (response) {
          
          console.log(response);
          
          return response.data;
        });
      }
      
      return promise;
    }
  };
  return myService;
});

// Custom Directive 
app.controller('EventType', function(myService1,$scope) {
  myService1.async().then(function(d) {
  $scope.EventType =d;
}); 
});



app.factory('myService', function($http) {
  var promise;
  var myService = {
    async: function() {
      if ( !promise ) {
        
        promise = $http.get('https://testdb-8c87.restdb.io/rest/Games?apikey=5ab1ef36f0a7555103cea622').then(function (response) {
          
          console.log(response);
          
          return response.data;
        });
      }
      
      return promise;
    }
  };
  return myService;
});

// Main Controller
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