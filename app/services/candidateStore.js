employeeApp.factory("candidateStore", function(){
    var candidates = {};

    candidates.list=[];

    candidates.add = function(candidate_object) {
        candidate_object.id = candidates.list.length+1;
        candidates.list.push(candidate_object);
        return candidate_object.id;
    }

    return candidates;
})