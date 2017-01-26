var app = angular.module('app',['ngRoute','ngAnimate','firebase']);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl: 'assets/fragments/name/name.html'
  })
  .when('/name',{
    templateUrl: 'assets/fragments/name/name.html'
  })
  .when('/email',{
    templateUrl: 'assets/fragments/email/email.html'
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
    templateUrl: 'assets/fragments/capabilities/capabilities.html'
  })
  .when('/type',{
    templateUrl: 'assets/fragments/typeSelector/typeSelector.html'
  })
  .when('/send',{
    templateUrl: 'assets/fragments/send/send.html'
  })
  .when('/end',{
    templateUrl: 'assets/fragments/end/end.html'
  })
})
