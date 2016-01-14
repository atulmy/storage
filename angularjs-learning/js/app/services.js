// App Services

var exampleAppServices = angular.module('exampleAppServices', ['ngRoute']);

exampleAppServices.factory('dataService', function($http) {
    return {
        getOceans: function(callback) {
            $http({
                method: 'GET',
                url: 'ajax.php?action=list-oceans',
                cache: true
            })
                .success(callback)
                .error(callback);
        }
    };
});