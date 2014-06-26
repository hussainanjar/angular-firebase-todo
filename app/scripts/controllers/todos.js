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
        .controller('TodosCtrl', function ($scope) {
            $scope.todos = {
                doneCount: 0,
                todoList: [],
                markAllDone: false
            };
            
            $scope.addTodo = function () {
                console.log("Adding new todo: " + $scope.newTodo);
                var todo = {
                    title: $scope.newTodo,
                    done: false,
                    editing : false
                };
                
                $scope.todos.todoList.push(todo);
                
                $scope.newTodo = "";
            };
            
            $scope.toggleDone = function (index) {
                console.log('Complete todo ' + index);
                var todo = $scope.todos.todoList[index];
                todo.done = !todo.done;
                
                console.log(todo.title + ' is marked as ' + todo.done);
                
                if (todo.done) {
                    $scope.todos.doneCount += 1;
                } else {
                    $scope.todos.doneCount -= 1;
                }
            };
            
            $scope.clearDone = function () {
                var todos = $scope.todos.todoList, todosLength = todos.length;
                
                while (todosLength--) {
                    if (todos[todosLength].done) {
                        console.log('clear item ' + todos[todosLength].title);
                        todos.splice(todosLength, 1);
                    }
                }
                
                $scope.todos.doneCount = 0;
            };
            
            $scope.markAllDone = function () {
                var todos = $scope.todos.todoList;
                
                console.log("Mark all done : " + $scope.todos.markAllDone);
                
                todos.forEach(function (item) {
                    item.done = !$scope.todos.markAllDone;
                });
                
                $scope.todos.doneCount = !$scope.todos.markAllDone ? todos.length : 0;
            };
            
            $scope.editTodo = function (index) {
                var todo = $scope.todos.todoList[index];
                todo.editing = true;
                
            };
            
            $scope.closeEditTodo = function (index) {
                console.log('Close edit called ' + index);
                var todo = $scope.todos.todoList[index];
                todo.editing = false;
                
            };
        });
}(window.angular));
