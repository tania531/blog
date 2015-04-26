'use strict';

angular.module('blog')
.factory('Blog', ['$rootScope', '$firebaseArray', '$firebaseObject', function($rootScope, $firebaseArray, $firebaseObject){
  var fbBlogs;
  var afBlogs;

  function init(){
    fbBlogs = $rootScope.fbRoot.child('blogs');
    afBlogs = $firebaseArray(fbBlogs);
    return afBlogs;
  }

  function save(blog){
    return afBlogs.$save(blog);
  }

  function add(blog){
    return afBlogs.$add(blog);
  }

  function destroy(blog){
    return afBlogs.$remove(blog);
  }

  return {add: add, init: init, destroy: destroy, save: save};
}]);
