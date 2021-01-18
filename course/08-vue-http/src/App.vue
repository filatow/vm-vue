<template>
  <div class="container">
    <app-alert :alert="alert" @close="alert = null"></app-alert>
    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>
      <div class="form-control">
        <label for="name">Введите имя</label>
        <input type="text" id="name" v-model.trim="name" />
      </div>
      <button class="btn primary" :disabled="name.length === 0">
        Создать человека
      </button>
    </form>
    <app-loader v-if="loading"></app-loader>
    <app-people-list
      :people="people"
      @load="loadPeople"
      @remove="removePerson"
      v-else
    ></app-people-list>
  </div>
</template>

<script>
import axios from 'axios'
import AppPeopleList from './AppPeopleList.vue'
import AppAlert from './AppAlert.vue'
import AppLoader from './AppLoader.vue'

export default {
  components: { AppPeopleList, AppAlert, AppLoader },
  data() {
    return {
      name: '',
      people: [],
      alert: null,
      loading: false
    }
  },
  mounted() {
    this.loadPeople()
  },
  methods: {
    async createPerson() {
      const peopleUrl =
        'https://vm-vue-08-default-rtdb.firebaseio.com/people.json'

      const response = await fetch(peopleUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: this.name,
        }),
      })
      const firebaseData = await response.json()
      console.log(firebaseData)
      this.people.push({
        id: firebaseData.name,
        firstName: this.name
      })
      this.name = ''
    },
    async loadPeople() {
      this.loading = true
      const peopleUrl =
        'https://vm-vue-08-default-rtdb.firebaseio.com/people.json'
      try {
        const {data} = await axios.get(peopleUrl)
        if (!data) {
          throw new Error('Список людей пуст.')
        }
        this.people = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key]
          }
        })
        this.loading = false
      } catch (error) {
        this.alert = {
          type: 'danger',
          title: 'Ошибка!',
          text: error.message
        }
        this.loading = false
        console.log(error.message)
      }
    },
    async removePerson(id) {
      try {
        const name = this.people.find(p => p.id === id).firstName
        await axios.delete(
          `https://vm-vue-08-default-rtdb.firebaseio.com/people/${id}.json`
        )
        this.people = this.people.filter((person) => person.id !== id)
        this.alert = {
          type: 'primary',
          title: 'Успешно!',
          text: `Пользователь ${name} был удален`
        }
      } catch (error) {
        this.alert = {
          type: 'danger',
          title: 'Ошибка!',
          text: error.message
        }
      }
    }
  },
}
</script>

<style></style>
