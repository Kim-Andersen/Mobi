var app = angular.module('Mobi', []);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when("/employees", {controller: "EmployeeListCtrl", templateUrl: "partials/employee-list.html"});
	$routeProvider.when("/employees/:id", {controller: "EmployeeDetailCtrl", templateUrl: "partials/employee-detail.html"});
	$routeProvider.when("/memorizations", {controller: "MemorizationListCtrl", templateUrl: "partials/memorization-list.html"});
}]);