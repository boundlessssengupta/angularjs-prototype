'use strict';

/**
 * @ngdoc function
 * @name fotutorialApp.controller:SignupcontrollerCtrl
 * @description
 * # SignupcontrollerCtrl
 * Controller of the fotutorialApp
 */
angular.module('fotutorialApp')
	.controller('SignupCtrl', function($scope, $rootScope, $modal) {
		$scope.open = function() {
			$rootScope.signinwindow.close('signup');
			
			var signupWindow = $modal.open({
				templateUrl: 'views/signup.html',
				backdrop: 'static'
			});

			$rootScope.signupwindow = signupWindow;
		};

		$scope.close = function() {
			$rootScope.signupwindow.dismiss('cancel');
		};

		$scope.signup = function(signupInfo) {
			$rootScope.signupwindow.close('signup');
			
			console.log(signupInfo);
		};
	});
