'use strict';

/**
 * @ngdoc function
 * @name todosApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todosApp
 */
angular.module('todosApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
