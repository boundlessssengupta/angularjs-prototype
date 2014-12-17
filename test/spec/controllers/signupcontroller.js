'use strict';

describe('Controller: SignupcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('fotutorialApp'));

  var SignupcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignupcontrollerCtrl = $controller('SignupcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
