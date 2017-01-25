app.controller('typeCtrl',['$scope','viewer',function ($scope,viewer) {
  $scope.viewer = viewer
  viewer.show = false
  $scope.static = function () {
    viewer.type = 'web estatica'
  }
  $scope.web = function () {
    viewer.type = 'aplicacion web'
  }
  $scope.full = function () {
    viewer.type = 'aplicacion web y movil'
  }
  $scope.fulldesktop = function () {
    viewer.type = 'aplicacion web , movil y escritorio'
  }
}])
