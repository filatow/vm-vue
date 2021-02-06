<template>
  <div class="container">
    <div class="card" v-if="show">
      <h2 v-color:[dirType].blink.hover="myColor" >Разговор про директивы</h2>
      <div class="form-control">
        <label for="inp">Активный по умолчанию</label>
        <input type="text" id="inp" v-focus />
      </div>
      <button class="btn" @click="myColor = 'darkblue'">Сделать синей</button>
      <button class="btn"
        @click="dirType = dirType === 'color' ? 'backgroundColor' : 'color'"
      >Переключить тип: {{ dirType }}</button>
    </div>
  </div>
</template>

<script>
import focusDirective from './focusDirective'
import colorDirective from './colorDirective'

export default {
  data() {
    return {
      myColor: 'darkred',
      dirType: 'color',
      show: true
    }
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.show = false
  //   }, 2000);
  // },
  directives: {
    focus: focusDirective,
    color: colorDirective,
  },
}
</script>

<style scoped></style>
