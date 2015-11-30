employeeApp.controller("CandidateDetailsController",["_","$location","$routeParams", "candidateStore",
    function(_,$location,$routeParams,candidateStore) {
        var candidate_id = $routeParams.candidateId;
        var candidate_index = _.indexOf(_.pluck(candidateStore.list,"id"),Number(candidate_id));
        if (candidate_index != 'undefined') {
            this.candidate = candidateStore.list[candidate_index];
        }

        this.save = function() {
            candidateStore.list[candidate_index].name = this.candidate.name;
            $location.path("/");
        }
    }
])