<template>
  <div class="card">
    <p>
      Название: <strong>{{ name }} ({{ alias }})</strong>
    </p>
    <p>
      Версия: <strong>{{ version }} ({{ doudleVersion }})</strong>
    </p>

    <button class="btn warning" @click="changeToThree">Изменить на 3 версию</button>
  </div>
</template>

<script>
import { computed, inject } from 'vue'
export default {
  props: ['name', 'version'],
  emits: ['change-version'],
  setup(props, context) {
    function change() {
      console.log(context)
      context.emit('change-version', 3)
    }

    const alias = inject('alias')

    return {
      alias,
      doudleVersion: computed(() => props.version * 2),
      changeToThree: change
    }
  },
  // computed: {
  //   doudleVersion() {
  //     return this.version * 2
  //   },
  // },
}
</script>

<style scoped></style>
