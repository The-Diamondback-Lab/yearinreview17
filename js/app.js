var review_app = angular.module("review-app", ["ui.router"]);

review_app.controller("main-ctlr", ['$scope', '$http', function($scope, $http){

  loadData();



  function loadData(){
    $http.get('includes/data/articles.json').
        success(function(data, status, headers, config) {
          $scope.articles = data;
        }).error(function(data, status, headers, config) {
          console.log("Cannot read data from JSON file.");
    });

    $http.get('includes/data/months.json').
      success(function(data, status, headers, config) {
          $scope.months = data;
          console.log(data);
      }).error(function(data, status, headers, config) {
          console.log("Cannot read data from JSON file.")
    });
  }

}]);


review_app.directive('article', function() {
  return {
    restrict: 'EA',
    templateUrl: 'templates/article.html',
    scope: {
      articleData: '=articleData'
    },
  }
});

review_app.directive('month', function(){
  return {
    restrict: 'EA',
    templateUrl: 'templates/month.html',
    scope: {
      id: '=monthId',
      name: '=monthName',
      articles: '=articles'
    }
  }
});
