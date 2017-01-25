app.controller('sendCtrl',['$scope','viewer',function ($scope,viewer) {
  $scope.viewer = viewer
  viewer.show = true
}])
