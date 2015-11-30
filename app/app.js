var employeeApp = angular.module("employeeApp",["ngRoute"])
    .config(['$routeProvider',function($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl: "app/templates/home.html",
                controllerAs: "candidate_list",
                controller:"CandidateListController"
             })
            .when('/details/:candidateId',{
                templateUrl: "app/templates/candidate.html",
                controllerAs: "candidate_detail",
                controller:"CandidateDetailsController"
     })
     }]
    )
    .constant('_',
    window._
    );