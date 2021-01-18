<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h1>Анкета на Vue разработчика!</h1>

      <!-- <div class ="form-control" :class="{invalid: errors.name}">
        <label for="name">Как тебя зовут?</label>
        <input
          type="text"
          id="name"
          placeholder="Введи имя"
          v-model.trim="name"
        >
        <small v-if="errors.name">{{ errors.name }}</small>
      </div> -->

      <app-input
        placeholder="Введи имя"
        :error="errors.name"
        label="Как тебя зовут?"
        v-model:value="name"
      ></app-input>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input
          type="number"
          id="age"
          max="70"
          v-model.number="age"
        >
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option selected value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label>
            <input
            type="radio"
            name="trip"
            v-model="relocate"
            value="yes"/> Да
          </label>
        </div>

        <div class="checkbox">
          <label>
            <input
            type="radio"
            name="trip"
            v-model="relocate"
            value="no"/> Нет
          </label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label>
            <input
              type="checkbox"
              v-model="skills"
              name="slills"
              value="vuex"
            /> Vuex
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input
              type="checkbox"
              v-model="skills"
              name="slills"
              value="vue-cl"
            /> Vue CLI
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input
              type="checkbox"
              v-model="skills"
              name="slills"
              value="vue-router"
            /> Vue Router
          </label>
        </div>
      </div>

      <div class="form-checkbox">
        <strong>Правила нашей компании</strong>
        <div class="checkbox">
          <label>
            <input
              type="checkbox"
              v-model="agree"
            /> С правилами согласен
          </label>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
  import AppInput from './AppInput'

  export default {
    data() {
      return {
        name: '',
        age: 23,
        city: 'msk',
        relocate: 'yes',
        skills: [],
        agree: false,
        errors: {
          name: null
        }
      }
    },
    methods: {
      submitHandler() {
        if (this.formIsValid()) {
          console.group('Form data')
          console.log('Name: ', this.name)
          console.log('Age: ', this.age)
          console.log('City: ', this.city)
          console.log('To Tokyo: ', this.relocate)
          console.log('Skills: ', this.skills)
          console.log('Rules accepted: ', this.agree)
          console.groupEnd()
        }
      },
      formIsValid() {
        let isValid = true
        if (this.name.length === 0) {
          this.errors.name = 'Введите ваше имя'
          isValid = false
        } else {
          this.errors.name = null
        }
        return isValid
      }
    },
    components: {AppInput}
  }
</script>

<style>
  .form-control small {
    color: darkred;
  }
  .form-control.invalid input {
    border-color: darkred;
  }
</style>
