var DEBUG_MODE = true;

var debugMsg = function(msg) {
    if (DEBUG_MODE)
        console.log('!!! DEBUG !!! ' + msg);
};

var ngApp = angular.module('ngApp', ['ngRoute']);

ngApp.config('$routerProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/home.html',
            controller: 'CtrlHome'
        })
        .when('/about', {
            templateUrl: '/views/about.html',
            controller: 'CtrlAbout'
        })
        .when('/projects', {
            templateUrl: '/views/projects.html',
            controller: 'CtrlProjects'
        })
        .when('/resume', {
            templateUrl: '/views/resume.html',
            controller: 'CtrlResume'
        });

    //check browser support
    $locationProvider.html5Mode(true);
});