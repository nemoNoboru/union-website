app.service('viewer',function () {
  this.type = '...'
  this.pages = '...'
  this.description = '...'
  this.style = '...'
})

app.controller('viewerCtrl',['$scope','viewer',function ($scope,viewer) {
  $scope.viewer = viewer
}])
