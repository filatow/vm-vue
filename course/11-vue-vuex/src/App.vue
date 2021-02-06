<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>{{ uppercaseAppTitle }}</h1>
      <h2>Счетчик {{ counter }}</h2>
      <button class="btn primary" @click="addOne">Добавить</button>
      <button class="btn danger"
        @click="incrementAsync({value: 10,delay: 600})"
      >Добавить 10</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import TheNavbar from './TheNavbar'
export default {
  components: {TheNavbar},
  computed: {
    ...mapGetters(['uppercaseAppTitle']),
    ...mapGetters('count', ['counter']),
  },
  methods: {
    ...mapMutations({
      addOne: 'count/add'
    }),
    ...mapActions('count', ['incrementAsync']),
    // incrementAsync() {
    //   this.$store.dispatch('incrementAsync', {
    //     value: 10,
    //     delay: 600
    //   })
    // }
  },
}
</script>
