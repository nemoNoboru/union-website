app.service('viewer',function () {
  this.name = '...'
  this.email = '...'
  this.type = '...'
  this.pages = '...'
  this.description = '...'
  this.style = '...'
  this.capability = '...'
  this.active=1
})

app.controller('viewerCtrl',['$scope','viewer',function ($scope,viewer) {
  $scope.viewer = viewer
}])
