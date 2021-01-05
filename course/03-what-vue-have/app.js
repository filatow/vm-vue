Vue.createApp({
  data: () => ({
    myHTML: '<h1>Vue3 App</h1>',
    title: 'Я есть Грут', 
    person: {
      firstName: 'Evgeniy',
      lastName: 'Filatov',
      age: 28
    },
    items: [1, 2, 3, 4, 5, 6]
  }),
  methods: {
    addItem() {
      this.items.unshift(this.$refs.myInput.value);
      // console.log(this.$refs.myInput.value);
    },
    remove(index) {
      this.items.splice(index, 1);
    },
    log(item) {
      console.log(item);
    }
  },
  computed: {
    evenItems() {
      return this.items.filter((i) => (i % 2 === 0));
    }
  }
}).mount('#app');
