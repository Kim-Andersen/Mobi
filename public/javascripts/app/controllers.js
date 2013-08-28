
/*	
	EmployeeCtrl
*/

app.controller("EmployeeCtrl", function($scope, $http, $timeout){
	$scope.loadEmployees = function(){
		$scope.refreshing = true;
		$http.get('employees').success(function(data){
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
		$http.post("employees", employee).success(function(data){
			$scope.workingEmployee = null;
			$scope.users.push(data);
		}).error(function(data){
			$scope.handleApiError(data);
		});
	};

	$scope.updateEmployee = function(employee){
		$scope.clearApiErrors();
		$http.put("employees/"+employee._id, employee).success(function(){
			$scope.workingEmployee = null;
			debuggger;
		}).error(function(data){
			$scope.handleApiError(data);
		});
	};

	$scope.deleteEmployee = function(id){
		$http.delete("employees/"+id).success(function(){
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
});