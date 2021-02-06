<template>
  <div class="container">
    <app-alert
      v-if="alertVisible"
      type="danger"
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
    <app-block></app-block>
  </div>
</template>

<script>
import alertMixin from './alertMixin'
import AppAlert from '../components/AppAlert.vue'
import AppBlock from '../components/AppBlock.vue'

export default {
  mixins: [alertMixin],
  components: {AppBlock, AppAlert },
}
</script>

