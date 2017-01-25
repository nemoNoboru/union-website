app.controller('pageCtrl',['$scope','viewer',function ($scope,viewer) {
  $scope.viewer = viewer
  viewer.show = false
  $scope.unknown = function () {
    viewer.pages = 'un numero indeterminado de'
  }
  $scope.simple = function () {
    viewer.pages = 'de 1 a 3'
  }
  $scope.medium = function () {
    viewer.pages = 'de 3 a 5'
  }
  $scope.full = function () {
    viewer.pages = 'de 5 a 7+'
  }
}])
