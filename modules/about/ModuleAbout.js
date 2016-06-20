'use strict';
var ModuleAbout = angular.module('ngApp.ModuleAbout', ['ui.router']);
ModuleAbout.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('main.about', {
        url: 'about',
        views: {
            'content@': {
                templateUrl: 'modules/about/ViewAbout.html'
            }
        }
    });
}]);