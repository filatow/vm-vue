const h = Vue.h;

const App = Vue.createApp({
  data() {
    return {
      title: `Это из свойства template`
    }
  },
  // template: `
  //   <div class="card center">
  //     <h1>{{title}}</h1>
  //     <button class="btn" @click="title = 'Изменили!!!'">Изменить</button>
  //   </div>
  // `
  render() {
    return h('div', {
      class: 'card center'
    }, [
      h('h1', {}, this.title),
      h('button', {
        class: 'btn',
        onClick: this.changeTitle
      }, 'Изменить')
    ]);
  },
  methods: {
    changeTitle() {
      console.log(this);
      this.title = 'Изменено!!!'
    }
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');  
  },
  updated() {
    console.log('updated');
  },
});

App.mount('#app');
// setTimeout(() => {
//   App.unmount();
// }, 2000);

Vue.createApp({
  data() {
    return {
      title: 'Заголовок второго приложения'
    }
  }
}).mount('#app2');