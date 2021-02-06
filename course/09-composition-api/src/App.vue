<template>
  <div class="container">
    <div class="card">
      <h2>{{ $i18n('app.title') }}</h2>
      <!-- <button
        class="btn"
        @click="$alert('Wow! It\'s working!')"
      >Alert</button> -->
      <button
        class="btn"
        @click="changeLang"
      >{{ $i18n('app.changeBtn') }}</button>
    </div>
    <button class="btn primary" @click="showModal">Открыть модальку</button>
    <teleport to="body">
      <app-modal v-if="modal" @close="modal = false"></app-modal>
    </teleport>
  </div>
</template>

<script>
import AppModal from '../components/AppModal.vue'
export default {
  components: { AppModal },
  inject: ['changeI18N'],
  // mounted() {
  //   this.$alert('On mounted text')
  // }
  data() {
    return {
      modal: false
    }
  },
  methods: {
    changeLang() {
      this.changeI18N()
      this.$forceUpdate()
    },
    showModal() {
      this.modal = true
    }
  },
}
</script>

<style scoped></style>
