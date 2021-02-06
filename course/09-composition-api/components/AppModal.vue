<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <div class="modal">
    <h3>Это заголовок модального окна</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quo aspernatur enim incidunt consequatur itaque, voluptatem inventore illum dolore fuga?</p>
  </div>
</template>

<script>
  export default {
    emits: ['close']
  }
</script>

<style scoped>

</style>