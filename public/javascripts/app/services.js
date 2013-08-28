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

app.factory("memorizationService", function($http){
	var apiRoot = '/api/memorization/';
	return {
		getAll: function(){
			return $http.get(apiRoot);
		},
		get: function(id){
			return $http.get(apiRoot + id);
		},
		add: function(memo){
			return $http.post(apiRoot, memo);
		},
		update: function(memo){
			return $http.put(apiRoot + memo._id, memo);
		},
		delete: function(id){
			return $http.delete(apiRoot +id);
		}
	};
});