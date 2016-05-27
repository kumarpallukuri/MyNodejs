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
		$scope.contact =  "";
	}
	$scope.remove = function(id){
		console.log(id);
		$http.delete('/contactlist/'+ id).success(function(response){
				console.log(response);
				refresh();
			});
	}
	$scope.edit = function(id){
		console.log(id);
		$http.get('/contactlist/'+ id).success(function(response){
			 $scope.contact = response;
				console.log(response);
				refresh();
			});
	}
	
	$scope.email = function(){
		$http.get('/contactlist/email').sucess(function(response){
			console.log("mail sent sucessfully")
		});
	}
   
   $scope.update = function(){
		console.log($scope.contact._id);
		$http.put('/contactlist/'+ $scope.contact._id,$scope.contact).success(function(response){
				console.log(response);
				refresh();
			});
			$scope.contact =  "";
	}
	$scope.clear = function(){
		$scope.contact =  "";
	}
   
   }]);