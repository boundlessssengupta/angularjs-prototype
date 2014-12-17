'use strict';

/**
 * @ngdoc overview
 * @name fotutorialApp
 * @description
 * # fotutorialApp
 *
 * Main module of the application.
 */
angular
  .module('fotutorialApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
