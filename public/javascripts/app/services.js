app.factory("employeeService", function($http){
	var apiRoot = '/api/employees/';
	return {
		getAll: function(){
			return $http.get(apiRoot);
		},
		get: function(id){
			return $http.get(apiRoot + id);
		},
		add: function(empl){
			return $http.post(apiRoot, empl);
		},
		update: function(empl){
			return $http.put(apiRoot + empl._id, empl);
		},
		delete: function(id){
			return $http.delete(apiRoot +id);
		}
	};
});