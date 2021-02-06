<template>
  <div class="card" v-if="task">
    <h2>{{ title }}</h2>
    <p>
      <strong>Статус</strong>:
      <AppStatus
        :type="statusType"
        :name="statusName"
      />
    </p>
    <p><strong>Дэдлайн</strong>: {{ deadline }}</p>
    <p><strong>Описание</strong>: {{ description }}</p>
    <div>
      <button
        class="btn"
      @click="() => changeStatus('inProgress')"
      >Взять в работу</button>
      <button
        class="btn primary"
        @click="() => changeStatus('done')"
      >Завершить</button>
      <button
        class="btn danger"
        @click="() => changeStatus('canceled')"
      >Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ id }}</strong> нет.
  </h3>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import AppStatus from '../components/AppStatus'
import { Status } from '../consts'


export default {
  components: { AppStatus },
  setup() {
    const route = useRoute()
    const store = useStore()
    const taskId = Number(route.params.taskId)

    const task = computed(() => store.getters.taskWithId(taskId))    
    const statusType = computed(() => Status[task.value.status].type)
    const statusName = computed(() => Status[task.value.status].name)

    const changeStatus = function(newStatus) {
      store.dispatch('updateTaskDВ', {
        id: taskId,
        status: newStatus
      })
    }

    if (task.value) {
      return {
        task: task.value,
        id: task.value.id,
        statusType,
        statusName,
        title: task.value.title,
        deadline: new Date(task.value.date).toLocaleDateString(),
        description: task.value.description,
        changeStatus
      }
    } else {
      return {
        task: task.value,
        id: taskId
      }
    }
    
  },
}
</script>

<style scoped></style>
