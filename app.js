new Vue({
el: '#vue-app',
data:{
    message: '',
    tasks: ['Learn C++','Build a 2D game', 'Upgrade the website']
},
methods: {
    enterTask () {
      if (this.message!=''){
      this.tasks.push(this.message);
      this.message = '';
      }
    },
    deleteTask(index){
    this.tasks.splice(index, 1);
    }
}
});
