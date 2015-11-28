describe('CandidateListController', function() {
  beforeEach(module('employeeApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe("Interacting with the input box", function() {
    beforeEach(function() {
      $scope = {};
      controller = $controller('CandidateListController', { $scope: $scope });      
    })
    it('Initial length of candidates array is zero', function() {
      expect($scope.candidates.length).toEqual(0);
      $scope.addCandidate("Gaurav");
      expect($scope.candidates.length).toEqual(1);
    });
    it('addCandidate() should increase the size of the candidates array just once', function() {
      var number_of_candidates = $scope.candidates.length;
      $scope.addCandidate("Gaurav");
      expect($scope.candidates.length).toEqual(number_of_candidates+1);
    });
  })
});
