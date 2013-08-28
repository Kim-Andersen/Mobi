
/*	
	Employee List Controller
*/

app.controller("EmployeeListCtrl", ["$scope", "employeeService", function($scope, employeeService){
	$scope.loadEmployees = function(){
		$scope.refreshing = true;
		employeeService.getAll().success(function(data){
			$scope.users = data;
			$scope.refreshing = false;
		});
	};

	$scope.editEmployee = function(empl){
		$scope.workingEmployee = empl;
	};

	$scope.submitEmployee = function(){
		if($scope.workingEmployee._id){
			$scope.updateEmployee($scope.workingEmployee);
		}
		else {
			$scope.saveEmployee($scope.workingEmployee);
		}
	};

	$scope.saveEmployee = function(employee){
		$scope.clearApiErrors();
		employeeService.add(employee).success(function(data){
			$scope.workingEmployee = null;
			$scope.users.push(data);
		}).error(function(data){
			$scope.handleApiError(data);
		});
	};

	$scope.updateEmployee = function(employee){
		$scope.clearApiErrors();
		employeeService.update(employee).success(function(){
			$scope.workingEmployee = null;
		}).error(function(data){
			$scope.handleApiError(data);
		});
	};

	$scope.deleteEmployee = function(id){
		employeeService.delete(id).success(function(){
			$scope.loadEmployees();
		});
	};

	$scope.handleApiError = function(data){
		switch(data.name){
			case "ValidationError":
				$scope.validationError = data.errors;
			break;
		};
	};

	$scope.clearApiErrors = function(){
		$scope.validationError = null;
	};

	$scope.loadEmployees();
}]);

/*	
	Employee Detail Controller
*/

app.controller("EmployeeDetailCtrl", ["$scope", "$routeParams", "employeeService", function($scope, $routeParams, employeeService){
	employeeService.get($routeParams.id).success(function(data){
		$scope.employee = data[0];
	});
}]);