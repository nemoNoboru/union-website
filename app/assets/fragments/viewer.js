app.service('viewer',function () {
  this.name = '...'
  this.email = '...'
  this.type = '...'
  this.pages = '...'
  this.description = '...'
  this.style = '...'
  this.capability = '...'
  this.budget = 'Burrada de'
})

app.controller('viewerCtrl',['$scope','viewer',function ($scope,viewer) {
  $scope.viewer = viewer
}])
