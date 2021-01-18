<template>
  <h1>{{ value }}</h1>
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
