<template>
  <div class="form-control">
    <label for="type">Тип блока</label>
    <select id="type" @change="changeType" :value="value">
      <option value="title" selected>Заголовок</option>
      <option value="subtitle">Подзаголовок</option>
      <option value="avatar">Аватар</option>
      <option value="text">Текст</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: 'title'
    },
  },
  emits: ['update:value'],
  methods: {
    changeType(event) {
      this.$emit('update:value', event.target.value)
    }
  }
};
</script>

<style scoped></style>
