app.controller('emailCtrl',['$scope','viewer',function ($scope,viewer) {
  $scope.viewer = viewer
  viewer.show = false
  viewer.active = 2
  $scope.check = function () {
    if($scope.email1 === $scope.email2){
      if(validateEmail($scope.email1)){
        viewer.email = $scope.email1
        $scope.error = 'Right'
      }else{
        $scope.error = 'Invalid E-mail'
      }
    }else{
      $scope.error = 'No coincidence'
    }
  }
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}])
