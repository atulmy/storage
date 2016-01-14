// App Controllers
var exampleAppControllers = angular.module('exampleAppControllers', ['ngRoute']);

exampleAppControllers.controller('earthController', function($scope, dataService) {
    dataService.getOceans(function(response) {
        $scope.oceans = response;
    });
});

exampleAppControllers.controller('earthDetailController', function($scope, $routeParams, dataService) {
    dataService.getOceans(function(response) {
        $scope.oceans = response;
    });
    $scope.ocean = $scope.oceans[$routeParams.id];
});