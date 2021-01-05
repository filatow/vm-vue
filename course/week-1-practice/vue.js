// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
  data() {
    return {
      activeIndex: 0, // то, что позволяет определить текущий активный шаг
      steps: [
        {title: 'Основы', text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'},
        {title: 'Компоненты', text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'},
        {title: 'Роутер', text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'},
        {title: 'Vuex', text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'},
        {title: 'Composition', text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'},
      ],
      isDone: false
    }
  },
  methods: {
    prev() {
      console.log(`prev`);
      if (this.activeIndex > 0) {
        this.activeIndex--;
      }
    },
    reset() {
      console.log(`reset`);
      this.isDone = false;
      this.activeIndex = 0;
    },
    nextOrFinish() {
      console.log(`nextOrFinish`);
      if (!this.isLastStep) {
        this.activeIndex++;
      } else {
        this.isDone = true;
      }
    },
    setActive(ind) {
      console.log(`setActive`);
      if (this.isDone) return;
      this.activeIndex = ind;
    }
  },
  computed: {
    isLastStep() {
      return this.activeIndex === this.steps.length - 1
    },
    isPrevButtonDisabled() {
      return this.activeIndex === 0
    },
    nextButtonCapture() {
      return (this.activeIndex !== this.steps.length - 1)
        ? 'Вперед'
        : 'Закончить'
    }
  }
}

Vue.createApp(App).mount('#app')