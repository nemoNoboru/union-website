app.controller('sendCtrl',['$scope','viewer','$firebaseArray','$location','$http',function ($scope,viewer,$firebaseArray,$location,$http) {
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
      //Envío de emails via post a web externa
      var url = 'http://arcane-reef-37359.herokuapp.com/'
      //Creación del objeto
      var toPost = {
        nombre: viewer.nombre,
        email: viewer.email
      }
      //Posting porque angular
      $http.post(url,toPost)
      //Redirect
      $location.path('/end')
    }
  }
}])
