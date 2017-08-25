var review_app = angular.module("review-app", []);

review_app.controller("main-ctlr", ['$scope', '$http', function($scope, $http){

    $scope.term = "";
    full_data = [];
  loadData();
    
    


  function loadData(){
    $http.get('includes/data/news.json').
        success(function(data, status, headers, config) {
          $scope.articles = data;
            full_data = data;
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
  
$scope.filterCategory = function(category) {
    if(category == "all") {
        $scope.articles = full_data;
    } else {
        result = {}
        month_keys = Object.keys(full_data)
        for(i = 0, len = month_keys.length; i < len; i++) {
            
            curr_month = full_data[month_keys[i]];
            new_month_arr = []
            for(j = 0, month_len = curr_month.length; j < month_len; j++) {
                curr = curr_month[j];
                if(curr["type"].indexOf(category) >= 0 || curr["section"].indexOf(category) >= 0) {
                    new_month_arr.push(curr);
                }
            }
            
            if(new_month_arr.length > 0) {
                //console.log("here")
                //console.log(month_keys[i])
                //console.log(new_month_arr)
                result[month_keys[i]] = new_month_arr;
                //console.log(result)
            }
        }
        $scope.articles = result; 
    }
}

$scope.search = function() {
    term = $scope.term;
    if(term.length < 3) {
        $scope.articles = full_data;
    } else {
        result = {}
        month_keys = Object.keys(full_data)
        for(i = 0, len = month_keys.length; i < len; i++) {
            
            curr_month = full_data[month_keys[i]];
            new_month_arr = []
            for(j = 0, month_len = curr_month.length; j < month_len; j++) {
                curr = curr_month[j];
                if(curr["headline"].indexOf(term) >= 0 || curr["description"].indexOf(term) >= 0) {
                    new_month_arr.push(curr);
                }
            }
            
            if(new_month_arr.length > 0) {
                //console.log("here")
                //console.log(month_keys[i])
                //console.log(new_month_arr)
                result[month_keys[i]] = new_month_arr;
                //console.log(result)
            }
        }
        $scope.articles = result; 
    }
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
