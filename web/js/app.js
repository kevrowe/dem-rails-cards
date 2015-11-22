'use strict';

/* App Module */

var datChatApp = angular.module('datChatApp', [
  'ngRoute',
  'btford.socket-io',
  'Devise',
  'datChatControllers',
  'datChatFilters',
  'datChatServices'
]);

datChatApp.config(['$routeProvider', 'AuthProvider',
  function($routeProvider, AuthProvider) {
    AuthProvider.registerPath('http://localhost:8001/user');


    $routeProvider.
      when('/game', {
        templateUrl: 'partials/game-list.html',
        controller: 'GameListCtrl'
      }).
      when('/game/:gameId', {
        templateUrl: 'partials/game.html',
        controller: 'GameCtrl'
      }).
      when('/chat/:chatId', {
        templateUrl: 'partials/chat.html',
        controller: 'ChatCtrl'
      }).
      when('/user/new', {
        templateUrl: 'partials/user-new.html',
        controller: 'UserCtrl'
      }).
      otherwise({
        redirectTo: '/game'
      });
  }]);
