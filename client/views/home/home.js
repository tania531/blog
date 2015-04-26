'use strict';

angular.module('blog')
.controller('HomeCtrl', ['$scope', '$rootScope', '$state', 'Blog', '$window', function($scope, $rootScope, $state, Blog, $window){
  $scope.afBlogs = Blog.init();


  $scope.readBlog = function(blog){
    $rootScope.details = blog;

    $state.go('read',{blogId:blog.$id});

  };

}]);
