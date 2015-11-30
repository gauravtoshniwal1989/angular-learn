describe('CandidateListController', function() {
  beforeEach(module('employeeApp'));

  var $controller, $location, candidateStore;

  beforeEach(
    inject(function($injector,$controller){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      candidateStore = $injector.get('candidateStore');
      ListController = $controller('CandidateListController');
  }));

  describe("Interacting with the input box", function() {
    it('Initial length of candidates array is zero', function() {
      expect(candidateStore.list.length).toEqual(0);
      ListController.addCandidate("Gaurav");
      expect(candidateStore.list.length).toEqual(1);
    });
    
    it('addCandidate() should increase the size of the candidates array in candidateStore by one', function() {
      var number_of_candidates = candidateStore.list.length;
      ListController.addCandidate("Gaurav");
      expect(candidateStore.list.length).toEqual(number_of_candidates+1);
    });
  })
});