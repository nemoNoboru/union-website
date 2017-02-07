app.component('progressBar',{
  templateUrl: 'assets/fragments/progressBar/progressBar.html',
  controller : function () {
    this.atodo = new Array(parseInt(this.todo))
    this.acompleted = new Array(parseInt(this.completed)) 
  },
  bindings:{
    completed: '@',
    atras: '@',
    siguiente: '@',
    todo: '@',
  }
})
