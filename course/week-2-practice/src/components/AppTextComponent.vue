<template>
  <p>
    {{ value }}
  </p>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
  },
};
</script>

<style scoped></style>
