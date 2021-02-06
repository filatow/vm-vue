<template>

  <!-- <main-layout></main-layout> -->
  <!-- <auth-layout></auth-layout> -->
  <component :is="layout + '-layout'" v-if="layout"></component>
</template>

<script>
import {computed} from 'vue'
import { useRoute } from 'vue-router'
import AuthLayout from './layout/authLayout.vue'
import MainLayout from './layout/mainLayout.vue'

export default {
  setup() {
    const route = useRoute()

    return {
      layout: computed(() => route.meta.layout)
    }
  },
  components: { MainLayout, AuthLayout },
}
</script>
