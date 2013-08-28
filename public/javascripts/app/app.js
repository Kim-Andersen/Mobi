var app = angular.module('Mobi', []);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when("/employees/:id", {controller: "EmployeeDetailCtrl", templateUrl: "partials/employee-detail.html"});
	$routeProvider.otherwise({controller: "EmployeeListCtrl", templateUrl: "partials/employee-list.html"});
}]);