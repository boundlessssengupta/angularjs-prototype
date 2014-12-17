'use strict';

/**
 * @ngdoc function
 * @name fotutorialApp.controller:SignincontrollerCtrl
 * @description
 * # SignincontrollerCtrl
 * Controller of the fotutorialApp
 */
angular.module('fotutorialApp')
	.controller('SignInCtrl', ['$scope', '$rootScope', 'SignInService', '$modal',
		function($scope, $rootScope, SignInService, $modal) {
			$scope.open = function() {
				var signinWindow = $modal.open({
					templateUrl: 'views/signin.html',
					backdrop: 'static'
				});

				$rootScope.signinwindow = signinWindow;
			};

			$scope.close = function() {
				$rootScope.signinwindow.dismiss('cancel');
			};

			$scope.signin = function(signinInfo) {
				$rootScope.signinwindow.close('signin');

				SignInService.signin(signinInfo);

				$rootScope.signedin = true;
			};

			$scope.signout = function() {
				$rootScope.signedin = false;
				
				SignInService.signout();
			};
		}
	]);
