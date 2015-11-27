var mathApp = angular.module("mathApp",['ngRoute'])
	.config(['$routeProvider',function($routeProvider) {
			$routeProvider
				.when('/',{
					templateUrl: "app/templates/greeting.html",
					controller:"MathController"
				})
				.when('/add',{
					templateUrl: "app/templates/greeting.html",
					controller:"AdditionController"
				})
		}]
	);
