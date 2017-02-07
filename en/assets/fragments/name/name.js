app.controller('nameCtrl',['$scope','viewer',function ($scope,viewer) {
  $scope.viewer = viewer
  viewer.show = false
  viewer.active=1;
}])
