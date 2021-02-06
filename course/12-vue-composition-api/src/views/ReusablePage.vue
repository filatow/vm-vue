<template>
  <app-alert
    v-if="alert"
    title="Работаем с composition API"
    type="primary"
    @close="close"
  ></app-alert>
  <div class="card">
    <h1>Переиспользование</h1>
    <button class="btn primary" @click="toggle">
      {{ alert ? 'Скрыть' : 'Показать' }} сообщение
    </button>
    <button class="btn" @click="navigate">Перейти на главную</button>
  </div>
</template>

<script>
import { useAlert } from '../use/alert'
import { useRouter } from 'vue-router'
import AppAlert from './AppAlert.vue'
export default {
  components: { AppAlert },
  setup() {
    const router = useRouter()

    const navigate = () => router.push('/')

    return {
      navigate,
      // alert,
      // toggle,
      // close,
      ...useAlert(true),
    }
  },
}
</script>

<style scoped></style>
