employeeApp.controller("CandidateListController",["$scope", function($scope) {
	
	$scope.candidate_name = "";
	$scope.candidates = [];

	$scope.addCandidate = function(candidate_name) {
		$scope.candidates.push({"name":candidate_name, "selected":true});
		$scope.candidate_name = "";
	}
}])