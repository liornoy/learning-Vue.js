new Vue({
el: '#vue-app',
data:{
    message: '',
    tasks: ['Learn C++','Build a 2D game', 'Upgrade the website'],
    completed: '',
    count: 0
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
    console.log("hi1");
  },
    completes(index){
      this.count ++;
      console.log("hi2");
      this.completed+=this.tasks[index]+", ";
      this.tasks.splice(index, 1);
    }
},
computed: {
  complet(){return this.completed},
  long(){return this.count}
}
});
