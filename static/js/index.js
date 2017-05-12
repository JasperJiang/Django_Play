var app=angular.module('myApp',[]);


app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});

app.controller('mainController',function($scope){
	$scope.articles=[
		{'author':'Jack','time':'50 minutes ago','content':'我有一个漂亮的女友，就是楼下'},
		{'author':'Sherry','time':'15 minutes ago','content':'我没男友'}];

	// $http.get('api/user',{params:{id:'0'}})
	// .sunccess(function(data,status,headers,config){
	// 	console.log(data);
	// 	console.log(status);
	// 	console.log(headers);
	// })
	// .error(function(data,status,headers,config){
	// 	console.log(status);
	// });
});