/*global console */
/*global Firebase*/
(function (angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name todosApp.controller:TodosCtrl
     * @description
     * # TodosCtrl
     * Controller of the todosApp
     */
    angular.module('todosApp')
        .controller('TodosCtrl', function ($scope, $firebase, $q, TODOURL) {
            
            var todoRef = new Firebase(TODOURL);
            
            $scope.todos = {
                doneCount: 0,
                todoList: $firebase(todoRef),
                markAllDone: false,
                total: 0,
                editingTodo: null
            };
            
            $scope.$watch('todos.todoList', function () {
                var total = 0;
                var doneCount = 0;
                $scope.todos.todoList.$getIndex().forEach(function (index) {
                    var todo = $scope.todos.todoList[index];
                    if (!todo || !todo.title) {
                        return;
                    }

                    total++;
                    if (todo.done === true) {
                        doneCount++;
                    }
                });
                $scope.todos.total = total;
                $scope.todos.doneCount = doneCount;
            }, true);
            
            $scope.addTodo = function () {
                console.log('Adding Todo: ' + $scope.newTodo);
                var todo = {
                    title: $scope.newTodo,
                    done: false
                };
                
                $scope.todos.todoList.$add(todo);
                $scope.newTodo = '';
            };
            
            $scope.toggleDone = function (index) {
                console.log('Toggle Todo: ' + index);
                var todo = $scope.todos.todoList[index];
                todo.done = !todo.done;
                
                if (todo.done) {
                    $scope.todos.doneCount += 1;
                } else {
                    $scope.todos.doneCount -= 1;
                }
                
                $scope.todos.todoList.$save(index);
            };
            
            $scope.clearDone = function () {
                console.log('Clear Done');
                angular.forEach($scope.todos.todoList.$getIndex(), function (index) {
                    if ($scope.todos.todoList[index].done) {
                        $scope.todos.todoList.$remove(index);
                    }
                });
                
                $scope.todos.doneCount = 0;
            };
            
            $scope.markAllDone = function () {
                console.log('Mark All Done: ' + $scope.todos.markAllDone);
                var todos = $scope.todos.todoList;
                
                angular.forEach($scope.todos.todoList.$getIndex(), function (index) {
                    $scope.todos.todoList[index].done = !$scope.todos.markAllDone;
                });
                
                $scope.todos.doneCount = !$scope.todos.markAllDone ? todos.total : 0;
                $scope.todos.todoList.$save();
            };
            
            $scope.editTodo = function (index) {
                console.log('Edit Todo: ' + index);
                $scope.todos.editingTodo = $scope.todos.todoList[index];
                $scope.originalTodo = angular.extend({}, $scope.todos.editingTodo);
                
            };
            
            $scope.revertTodo = function (index) {
                console.log('Revert Todo: ' + index);
                $scope.todos.editingTodo = null;
                $scope.todos.todoList[index] = $scope.originalTodo;
            };
            
            $scope.closeEditTodo = function (index) {
                console.log('Close Edit Todo: ' + index);
                $scope.todos.editingTodo = null;
                $scope.todos.todoList.$save(index);
                
            };
            
            $scope.deleteTodo = function (index) {
                console.log('Deleting Todo: ' + index);
                $scope.todos.todoList.$remove(index);
            };
        });
}(window.angular));
