app.controller('descriptionCtrl',['$scope','viewer',function ($scope,viewer) {
  $scope.viewer = viewer
  viewer.show = false
  viewer.active = 4
}])
