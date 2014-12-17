'use strict';

describe('Service: SignInService', function() {

	// load the service's module
	beforeEach(module('fotutorialApp'));

	// instantiate service
	var SignInService;
	beforeEach(inject(function(_SignInService_) {
		SignInService = _SignInService_;
	}));

	it('should identify null signin info', function() {
		var signinInfo = null;		
		expect(SignInService.signin(signinInfo)).toBe({error: "No signin object provided"});
	});

});
