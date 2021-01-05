const App = {
  data() {
    return {
      title: 'Список заметок',
      placeholderString: 'Введите название заметки',
      inputValue: '',
      notes: ['Заметка 1', 'Заметка 2']
    }
  },
  methods: {
    addNewNote() {
      if (this.inputValue === '') return;
      this.notes.push(this.inputValue);
      this.inputValue = '';
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    }
  },
  computed: {
    doubleCountComputed() {
      console.log(`doubleCountComputed`);
      return (this.notes.length * 2);
    }
  },
  watch: {
    inputValue(value) {

      if (value.length > 10) {
        this.inputValue = '';
      }
      console.log("inputValue :: value (changed)", value);
    }
  }
};

const app = Vue.createApp(App);
app.mount('#app');