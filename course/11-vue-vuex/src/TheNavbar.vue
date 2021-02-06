<template>
  <header class="navbar">
    <!-- Vuex -->
    Глобальный счетчик {{ counter }} (double:
    {{ doubleCounter }})
    <button class="btn primary" @click="add">Добавить 5</button>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    // counter() {
    //   return this.$store.getters['count/counter']
    // },
    ...mapGetters('count', ['counter', 'doubleCounter']),
  },
  methods: {
    ...mapMutations({
      addFive: 'count/add',
    }),
    add() {
      this.addFive({
        value: 5,
      })

      // this.add({ // works if method has another name
      //   value: 5
      // })

      // this.$store.commit('add', {
      //   value: 5
      // })

      // this.$store.commit({
      //   type: 'add',
      //   value: 5,
      // })
    },
  },
}
</script>
