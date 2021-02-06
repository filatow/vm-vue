<template>
  <div class="alert" :class="type">
    <p class="alert-title">{{ title }}</p>
    <p>{{ text }}</p>
    <button
      class="btn" :class="type"
      v-if="closable"
      @click="$emit('close')"
    >Закрыть</button>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'primary',
        required: false,
        validator(value) {
          return ['primary', 'danger', 'warning'].includes(value)
        }
      },
      title: {
        type: String,
        default: 'Внимание'
      },
      text: {
        type: String,
        default: ''
      },
      closable: {
        type: Boolean,
        default: false,
        required: false
      },
    },
    emits: ['close']
  }
</script>

<style scoped>

</style>