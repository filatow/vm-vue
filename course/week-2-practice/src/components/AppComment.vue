<template>
  <li class="list-item">
    <div>
      <p><strong>{{ mail }}</strong></p>
      <small>{{ text }}</small>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    mail: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
  },
};
</script>

<style scoped></style>
