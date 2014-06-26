/*global console */
(function (angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name todosApp.controller:AboutCtrl
     * @description
     * # TodosCtrl
     * Controller of the todosApp
     */
    angular.module('todosApp')
        .directive('ngEnter', function () {
            return function (scope, element, attrs) {
                element.bind("keydown keypress", function (event) {
                    if (event.which === 13) {
                        scope.$apply(function () {
                            scope.$eval(attrs.ngEnter);
                        });

                        event.preventDefault();
                    }
                });
            };
        });
}(window.angular));