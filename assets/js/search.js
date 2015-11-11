var searchApp = angular.module('searchApp', [])
	.controller('searchControllers', ['$scope', '$http', function($scope, $http) {
  $http.get('/feeds/feed.json').success(function(data) {
    $scope.results = data;
  });
}]);
