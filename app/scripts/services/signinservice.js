'use strict';

/**
 * @ngdoc service
 * @name fotutorialApp.SignInService
 * @description
 * # SignInService
 * Service in the fotutorialApp.
 */
angular.module('fotutorialApp')
	.service('SignInService', function() {
		this.signin = function(signinInfo) {
			console.log(signinInfo);
		};
		
		this.signout = function() {
			console.log('Signed out');
		};
	});
