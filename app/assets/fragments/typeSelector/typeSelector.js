app.controller('typeCtrl',['$scope','viewer',function ($scope,viewer) {
  $scope.static = function () {
    viewer.type = 'web estatica'
  }
  $scope.web = function () {
    viewer.type = 'aplicacion web'
  }
  $scope.full = function () {
    viewer.type = 'aplicacion web y movil'
  }
}])
