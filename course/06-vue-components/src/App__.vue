<template>
  <div>
    <div class="container tp-1">
      <div class="card">
        <h2>Slots</h2>
      </div>
      <app-list>
        <template #default="{elem, ind}">
          <span style="color: darkcyan;">
            Iteration[{{ ind + 1 }}]: {{ elem }}
          </span>
        </template>
      </app-list>
      <app-block>
        <p>
          Это самый важный текст для нового блока
        </p>
        <template #header>
          <h3>Это заголовок</h3>
        </template>
        <template #footer>
          <hr />
          <small>Это footer</small>
        </template>
      </app-block>
    </div>
  </div>
</template>

<script>
import AppBlock from './AppBlock'
import AppList from './AppList'

export default {
  components: { AppBlock, AppList },
}
</script>

<style scoped></style>
