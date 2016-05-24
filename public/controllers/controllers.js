var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
   var refresh = function(){
	   console.log("get called")
		$http.get('/contactlist').success(function(response){
			$scope.contactlist = response;
		});
   };
   refresh();
	$scope.addContact = function(){
		console.log($scope.contact);
		$http.post('/contactlist',$scope.contact).success(function(response){
			console.log(response);
			refresh();
		});
	}

   
   }]);