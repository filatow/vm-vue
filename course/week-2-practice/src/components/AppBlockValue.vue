<template>
  <div class="form-control">
    <label for="value">Значение</label>
    <textarea
      id="value" rows="3"
      @input="inputValue"
      :value="value"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
  },
  emits: ['update:value'],
  methods: {
    inputValue(event) {
      this.$emit('update:value', event.target.value)
    }
  },
};
</script>

<style scoped></style>
