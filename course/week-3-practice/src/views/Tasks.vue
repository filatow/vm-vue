<template>
  <template v-if="tasks.length">
    <h3 class="text-white">Всего активных задач: {{ activeTaskCount }}</h3>
    <app-card
      v-for="task in tasks"
      :title="task.title"
      :status="task.status"
      :date="task.date"
      :id="task.id"
      :key="task.id"
    />
  </template>
  <h1 class="text-white center" v-else-if="loading">Ищем задачи...</h1>
  <h1 class="text-white center" v-else>Задач пока нет</h1>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import AppCard from '../components/AppCard.vue'

export default {
  components: { AppCard },
  setup() {
    const store = useStore()
    const loading = ref(false)

    loading.value = true
    ;(async () => {
      await store.dispatch('loadTasksDB')
      loading.value = false
    })()

    const tasks = computed(() => store.state.tasks)
    const activeTaskCount = computed(() => store.getters.activeTaskCount)
    return {
      loading,
      tasks,
      activeTaskCount,
    }
  },
}
</script>
