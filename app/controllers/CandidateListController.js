employeeApp.controller("CandidateListController",["$location","candidateStore", function($location,candidateStore) {
    
    this.candidate_name = "";

    this.candidates = candidateStore.list;

    this.addCandidate = function(candidate_name) {
        // Use the add API exposed by candidateStore. Don't pass the ID. The store will automatically created the ID and save it in the list
        candidateStore.add({"name":candidate_name, "selected":true});
        this.candidate_name = "";
    }

    this.details = function(id) {
        $location.path("/details/"+id.toString());
    }
}])