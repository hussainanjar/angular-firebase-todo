(function (angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name todosApp.directives:enter-directive
     * @description
     * # todoEnter
     * Enter Directive
     */
    angular.module('todosApp')
        .directive('todoEnter', function () {
            return function (scope, element, attrs) {
                element.bind('keydown keypress', function (event) {
                    if (event.which === 13) {
                        scope.$apply(function () {
                            scope.$eval(attrs.todoEnter);
                        });

                        event.preventDefault();
                    }
                });
            };
        });
}(window.angular));