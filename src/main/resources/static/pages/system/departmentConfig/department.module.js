define(['angular','pages/treeview.directive','pages/system/departmentConfig/departmentService'],function(angular){
	angular.module('myApp.pages.system.department',['treeview-directive','department.service']).
	config(routeConfig).
	controller('departmentController',function($scope,departmentService){
		$scope.name="部门管理";
		$scope.columns=departmentService.columns;
		
		$scope.add=function(){
			departmentService.add();
		}
		$scope.edit=function(){
			departmentService.edit();
		}
		$scope.del=function(){
			departmentService.del();
		}
		$scope.loadTree = function(element){
			departmentService.loadTree(element);
		}
	});
	
	function routeConfig($stateProvider){
		$stateProvider.state('department',{
			url:'/department',
			templateUrl:'pages/system/departmentConfig/departmentConfig.html'
		})
	}
});