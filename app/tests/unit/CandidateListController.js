describe('CandidateListController', function() {
  beforeEach(module('employeeApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  it('sets the strength to "strong" if the password length is >8 chars', function() {
    var $scope = {};
    var controller = $controller('CandidateListController', { $scope: $scope });
    expect($scope.candidates.length).toEqual(0);
  });
});
