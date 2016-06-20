'use strict';

var ngApp = angular.module('ngApp', [
    'ui.router',
    'ngAnimate',
    'ngSanitize',
    'mgcrea.ngStrap',
    'ngApp.ModuleAbout',
    'ngApp.ModuleExperience',
    'ngApp.ModuleProjects'
]);

ngApp.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$httpProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('main', {
                url: '/',
                views: {
                    'nav': {
                        templateUrl: 'core/nav/ViewNav.html'
                    },
                    'content': {
                        templateUrl: 'core/home/ViewHome.html'
                    },
                    'footer': {
                        templateUrl: 'core/footer/ViewFooter.html'
                    }
                }
            });
    }
]);