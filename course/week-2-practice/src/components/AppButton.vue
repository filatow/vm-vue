<template>
  <button
    class="btn" :class="color"
    @click="$emit('action')"
  >{{ label }}</button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    label: {
      type: String,
      default: 'Кнопка'
    }
  },
  emits: ['action']
};
</script>

<style scoped></style>
