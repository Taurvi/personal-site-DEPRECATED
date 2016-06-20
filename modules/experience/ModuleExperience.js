'use strict';
var ModuleExperience = angular.module('ngApp.ModuleExperience', ['ui.router']);
ModuleExperience.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('main.experience', {
        url: 'experience',
        views: {
            'content@': {
                templateUrl: 'modules/experience/ViewExperience.html'
            }
        }
    });
}]);