'use strict';

describe('Controller: SignincontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('fotutorialApp'));

  var SignincontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignincontrollerCtrl = $controller('SignincontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
