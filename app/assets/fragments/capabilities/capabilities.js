app.controller('capCtrl',['$scope','viewer',function ($scope,viewer) {
  $scope.viewer = viewer;
  viewer.show = false
  $scope.static = function () {
    viewer.capability = 'no necesita ningun anadido'
  }
  $scope.dynamicdb = function () {
    viewer.capability = 'tiene que ser capaz de anadir, modificar y borrar contenido textual'
  }
  $scope.full = function () {
    viewer.capability = 'tiene que ser capaz de anadir, modificar y borrar contenido textual y multimedia'
  }
}])
