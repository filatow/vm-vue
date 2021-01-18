<template>
  <div class="card">
    <h2>Комментарии</h2>
    <ul class="list">
      <app-comment
        v-for="{email, body} in comments"
        :key="email"
        :mail="email"
        :text="body"
      ></app-comment>
    </ul>
  </div>
</template>

<script>
import AppComment from './AppComment.vue'
export default {
  components: { AppComment },
  props: {
    comments: {
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped></style>
