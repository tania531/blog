'use strict';

angular.module('checklist')
.controller('TasksCtrl', ['$scope', 'Task', '$window', function($scope, Task, $window){
  $scope.afTasks = Task.init();

  $scope.sort = function(sortString){
    var modifier = ($scope.taskOrder === sortString) ? '-' : '';
    $scope.taskOrder = modifier + sortString;
  };

  $scope.toggleComplete = function(task){
    Task.save(task);
  };

  $scope.deleteTask = function(task){
    Task.destroy(task);
  };

  $scope.editTask = function(task){
    task.dueDate = new Date(task.dueDate);
    $scope.task = task;
  };

  $scope.updateTask = function(task){
    $scope.task = {};
    task.dueDate = task.dueDate.getTime();
    Task.save(task);
  };

  $scope.addTask = function(task){
    var o = {
      title: task.title,
      dueDate: task.dueDate.getTime(),
      priority: task.priority,
      isComplete: false,
      createdAt: $window.Firebase.ServerValue.TIMESTAMP
    };

    Task.add(o)
    .then(function(){
      $scope.task = {};
    });
  };
}]);
