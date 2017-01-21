var app = angular.module('app',['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl: 'assets/fragments/typeSelector/typeSelector.html'
  })
  .when('/description',{
    templateUrl: 'assets/fragments/description/description.html'
  })
  .when('/style',{
    templateUrl: 'assets/fragments/style/style.html'
  })
  .when('/pages',{
    templateUrl: 'assets/fragments/pages/pages.html'
  })
  .when('/capability',{
    templateUrl: 'assets/fragments/capability/capability.html'
  })
  .when('/budget',{
    templateUrl: 'assets/fragments/budget/budget.html'
  })
})
