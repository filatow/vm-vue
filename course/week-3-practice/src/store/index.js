import { createStore } from 'vuex'
import { asyncGetTasks, asyncSetTasks } from '../utils'

export default createStore({
  state() {
    return {
      tasks: [],
      transferring: false
    }
  },
  getters: {
    activeTasks(state) {
      return state.tasks.filter((task) => task.status === 'active')
    },
    activeTaskCount(_, getters) {
      return getters.activeTasks.length
    },
    taskWithId: (state) => (id) => {
      return state.tasks.find((task) => task.id === id)
    },
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    addTask(state, newTask) {
      state.tasks.push(newTask)
    },
    updateTask(state, patch) {
      const { id } = patch
      let task = state.tasks.find((task) => task.id === id)
      Object.assign(task, patch)
    },
    startTrasferring(state) {
      state.transferring = true
    },
    stopTrasferring(state) {
      state.transferring = false
    }
  },
  actions: {
    async loadTasksDB({ commit, state }) {
      try {
        if (state.transferring) {
          console.warn('Загрузка списка задач была заблокирована');
        } else {
          commit('startTrasferring')
          const tasks = await asyncGetTasks()
          commit('setTasks', tasks)
          commit('stopTrasferring')
        }
      } catch (e) {
        console.error(e.message)
      }
    },

    async addTaskDB({ commit, state }, newTask) {
      try {
        if (state.transferring) {
          throw new Error('Не удалось добавить новую задачу')
        } else {
          commit('startTrasferring')
          commit('addTask', newTask)
          await asyncSetTasks(state.tasks)
          commit('stopTrasferring')
        }
      } catch (e) {
        console.error(e.message)
      }
    },
    
    async updateTaskDВ({ state, commit }, patch) {
      try {
        if (state.transferring) {
          throw new Error('Не удалось обновить задачу')
        } else {
          commit('startTrasferring')
          commit('updateTask', patch)
          await asyncSetTasks(state.tasks)
          commit('stopTrasferring')
        }
      } catch (e) {
        console.error(e.message)
      }
    },
  },
  mounted(state) {
    state.tasks = asyncGetTasks()
  },
})
