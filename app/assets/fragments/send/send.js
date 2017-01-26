app.controller('sendCtrl',['$scope','viewer','$firebaseArray','$location',function ($scope,viewer,$firebaseArray,$location) {
  $scope.viewer = viewer
  $scope.errores = []
  viewer.show = true

  $scope.send = function () {
    // comprobar que no hay campos vacios
    $scope.errores = []
    var keys = Object.keys(viewer)
    keys.forEach(function (i) {
      if(viewer[i]=='...'){
        $scope.errores.push('El  campo ' + i + ' no puede estar vacio')
      }
    })
    if($scope.errores.length != 0){
      console.log('denegado')
      return
    }else{
      // enviar los datos del presupuesto a firebase
      var ref = firebase.database().ref().child('presupuestos')
      var presupuestos = $firebaseArray(ref)
      presupuestos.$add(viewer)
      $location.path('/end')
    }
  }
}])
