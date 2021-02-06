<template>
  <div class="container">
    <app-alert
      v-if="alertVisible"
      text="Это очень важное сообщение: будьте бдительны"
      title="Внимание!"
      closable
      @close="alertVisible = false"
    ></app-alert>
    <div class="card">
      <button
        class="btn primary"
        @click="toggleAlert"
      >{{ alertVisible ? 'Скрыть' : 'Показать' }} сообщение</button>
    </div>
  </div>
</template>

<script>
import AppAlert from './AppAlert.vue'
import alertMixin from '../src/alertMixin';
export default {
  mixins: [alertMixin],
  components: { AppAlert },
}
</script>

