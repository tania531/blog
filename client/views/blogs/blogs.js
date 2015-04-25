'use strict';

angular.module('blog')
.controller('BlogsCtrl', ['$scope', 'Blog', '$window', function($scope, Blog, $window){
  $scope.afBlogs = Blog.init();

  $scope.deleteBlog = function(blog){
    Blog.destroy(blog);
  };

  $scope.editBlog = function(blog){
    $scope.blog = blog;
  };

  $scope.updateBlog = function(blog){
    Blog.save(blog);
    $scope.blog = {};
  };

  $scope.saveBlog = function(blog){
    Blog.save(blog);
    console.log('$scope.blog');
  };

  $scope.addBlog = function(blog){
    var o = {
      title: blog.title,
      content: blog.content,
      createdAt: $window.Firebase.ServerValue.TIMESTAMP
    };

    Blog.add(o)
    .then(function(){
      $scope.blog = {};
    });
  };
}]);
