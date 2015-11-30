describe('CandidateDetailsController', function() {
    beforeEach(module('employeeApp'));

    var $controller, $routeParams, candidateStore, candidate_id;

    beforeEach(inject(function($injector,$controller){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        candidateStore = $injector.get('candidateStore');

        // Create some seed data before each of the test cases
        candidate_id = added_candidate_id = candidateStore.add({"name":"Toshniwal", "selected":false});
        console.log(added_candidate_id);
        DetailsController = $controller('CandidateDetailsController', { $routeParams: {candidateId:added_candidate_id}});
    }));

    describe("Values populated in the input box", function() {
        it('Should get the relevent details from the CandidateStore based on the ID passed to it via the route', function() {
            expect(DetailsController.candidate.name).toEqual("Toshniwal");
        });
        it("Should save the changed data to the data store", function() {
            var index_of_this_candidate_in_store= _.indexOf(_.pluck(candidateStore.list,"id"),Number(candidate_id));
            DetailsController.candidate.name = "Gaurav";
            DetailsController.save();
            expect(candidateStore.list[index_of_this_candidate_in_store].name).toEqual("Gaurav")
        })
    })
});