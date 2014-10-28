'use strict';

angular.module('mvsouza.angular-rrssb', []).directive('rrssb', function () {
  var value = 0;

  return {
    restrict: 'AE',
    templateUrl: 'angular-rrssb.html',
    replcae: true,
    link: function ($scope, element, attr) {
      $scope.urlToShare = attr.ngShareLink;
      $scope.shareMidias = attr.ngShareMidias;
      $scope.showAll = false || attr.ngShareAll; 
      $scope.shoulShow = function (socialNetworkName) {
        return ($scope.shareMidias && $scope.shareMidias.indexOf(socialNetworkName)>-1) || $scope.showAll;
      };
      $scope.pinterestImg = attr.ngPinterestImg;
      if(attr.ngGithubProject)$scope.githubProject = attr.ngGithubProject;
      $scope.title = "" || attr.ngShareTitle; 
      $scope.encode = function (text) {
        return encodeURIComponent(text);
      };
      //$scope.fbShare = (function () {
        //window.open('http://www.facebook.com/sharer.php?s=100&p[url]=' + $scope.urlToShare);
      //});
    }
  };
});