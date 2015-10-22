var DEBUG_MODE = true;

var debugMsg = function(msg) {
    if (DEBUG_MODE)
        console.log('!!! DEBUG !!! ' + msg);
};

var ngApp = angular.module('ngApp', ['ngRoute']);

ngApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'js/views/home.html',
            controller: 'CtrlHome'
        })
        .when('/about/', {
            templateUrl: 'views/about.html',
            controller: 'CtrlAbout'
        })
        .when('/projects/', {
            templateUrl: 'views/projects.html',
            controller: 'CtrlProjects'
        })
        .when('/resume/', {
            templateUrl: 'views/resume.html',
            controller: 'CtrlResume'
        });
});