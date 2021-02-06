<template>
  <app-alert
    v-if="alert"
    title="Работаем с composition API"
    type="danger"
    @close="close"
  ></app-alert>
  <div class="card">
    <h1>Vue Composition Api</h1>
    <small>data, methods, computed, watch</small>
    <div class="form-control">
      <input type="text" ref="textInput" />
    </div>

    <div class="form-control">
      <input type="text" v-model="firstName" />
    </div>

    <button class="btn" @click="change">Изменить</button>
    <button class="btn danger" @click="toggle"
    >{{ alert ? 'Скрыть' : 'Показать' }} сообщение</button>
  </div>

  <framework-info
    :name="name"
    :version="version"
    @change-version="changeVersion"
    class="text-from-app"
  >
    <template #footer>
      <p class="foot-paragrath">
        This is footer
      </p>
    </template>
  </framework-info>
</template>

<script>
import AppAlert from './AppAlert'
import FrameworkInfo from '../FrameworkInfo'
import {
  ref,
  reactive,
  // computed,
  // isRef,
  watch,
  provide,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue'
import { useAlert } from '../use/alert'
export default {
  setup() {
    const name = ref('VueJS')
    const alias = ref('VUE framework')
    const version = ref(3)
    const firstName = ref('')

    const framework = reactive({
      name: 'VueJS',
      version: 3,
    })
    
    const {alert, toggle, close} = useAlert()
    // const alert = ref(false)

    // watch([doudleVersion, name], (newValues, oldValues) => {
    //   console.log(newValues[0])
    //   console.log(newValues[1])
    //   console.log(oldValues[0])
    //   console.log(oldValues[1])
    // })

    // const toggle = () => alert.value = !alert.value
    // const close = () => alert.value = false

    watch(firstName, (newV, oldV) => {
      console.log('🖨️ :: watch :: oldV', oldV)
      console.log('🖨️ :: watch :: newV', newV)
    })

    provide('alias', alias)

    function changeInfo() {
      name.value = 'VueJS!'
      version.value = 4
    }

    function changeVersion(num) {
      version.value = num
    }

    onBeforeMount(() => {
      console.log(`onBeforeMount`)
    })
    onMounted(() => {
      console.log(`onMounted`)
    })
    onBeforeUpdate(() => {
      console.log(`onBeforeUpdate`)
    })
    onUpdated(() => {
      console.log(`onUpdated`)
    })
    onBeforeUnmount(() => {
      console.log(`onBeforeUnmount`)
    })
    onUnmounted(() => {
      console.log(`onUnmounted`)
    })

    return {
      name,
      version,
      framework,
      change: changeInfo,
      changeVersion,
      firstName,
      alert,
      close,
      toggle
    }
  },
  components: { FrameworkInfo, AppAlert },
}
</script>

<style scoped></style>
