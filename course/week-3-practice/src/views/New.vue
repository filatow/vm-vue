<template>
  <form class="card" @submit.prevent="create">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title" />
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date" />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="isDisabled">Создать</button>
  </form>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup() {
    const router = useRouter()
    const store = useStore()
    
    const stored = {
      title: localStorage.getItem('NewTaskTitle'),
      date: localStorage.getItem('NewTaskDate'),
      description: localStorage.getItem('NewTaskDescription'),
    }

    function clearTemporaryFormData() {
      localStorage.removeItem('NewTaskTitle')
      localStorage.removeItem('NewTaskDate')
      localStorage.removeItem('NewTaskDescription')
    }

    const title = ref(stored.title || '')
    const date = ref(stored.date || '')
    const description = ref(stored.description || '')

    const isDisabled = computed(() => {
      return !(title.value && date.value && description.value)
    })

    watch(title, (newValue) => {
      localStorage.setItem('NewTaskTitle', newValue)
    })
    watch(date, (newValue) => {
      localStorage.setItem('NewTaskDate', newValue)
    })
    watch(description, (newValue) => {
      localStorage.setItem('NewTaskDescription', newValue)
    })

    function create() {
      if (isDisabled.value) return

      const newTask = {
        id: Date.parse(date.value),
        status: Date.parse(date.value) > Date.now() ? 'active' : 'canceled',
        title: title.value,
        date: date.value,
        description: description.value,
      }

      store.dispatch('addTaskDB', newTask)
      clearTemporaryFormData()
      router.push('/')
    }

    return {
      title,
      date,
      description,
      isDisabled,
      create,
    }
  },
}
</script>
