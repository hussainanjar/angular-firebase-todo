(function (angular) {
    'use strict';

    /**
     * @ngdoc overview
     * @name todosApp
     * @description
     * # todosApp
     *
     * Main module of the application.
     */
    angular
        .module('todosApp', [
            'ngRoute',
            'firebase'
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/todos.html',
                    controller: 'TodosCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        })
        .constant('TODOURL', 'https://glaring-fire-7135.firebaseio.com/todos/');
}(window.angular));
