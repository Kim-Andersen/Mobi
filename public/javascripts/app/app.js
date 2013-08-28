var app = angular.module('Mobi', []);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.otherwise({controller: "EmployeeCtrl", templateUrl: "partials/employee-list.html"})
}]);