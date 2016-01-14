// App

var exampleApp = angular.module('exampleApp', ['ngRoute', 'exampleAppControllers', 'exampleAppServices']);

exampleApp.config(function($routeProvider){
    $routeProvider
        .when('/oceans/:id', {
            templateUrl: 'templates/oceans.detail.html',
            controller: 'earthDetailController'
        })
        .when('/oceans', {
            templateUrl: 'templates/oceans.list.html',
            controller: 'earthController'
        })
        .when('/', {
            templateUrl: 'templates/index.html'
        });
});

exampleApp.run(function() {
    console.log('Any initialization code, put in here.');
});