'use strict';
var ModuleAbout = angular.module('ngApp.ModuleProjects', ['ui.router']);
ModuleAbout.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('main.projects', {
        url: 'projects',
        views: {
            'content@': {
                templateUrl: 'modules/projects/ViewProjects.html'
            }
        }
    });
}]);