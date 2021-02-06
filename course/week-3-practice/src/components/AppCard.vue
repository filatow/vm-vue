<template>
  <div class="card">
    <h2 class="card-title">
      {{ title }}
      <AppStatus :type="statusType" :name="statusName" />
    </h2>
    <p>
      <strong>
        <small>
          {{ deadline }}
        </small>
      </strong>
    </p>
    <router-link :to="'/task/' + id">
      <button class="btn primary">Посмотреть</button>
    </router-link>
  </div>
</template>

<script>
import AppStatus from './AppStatus'
import { Status } from '../consts'

export default {
  components: { AppStatus },
  props: ['title', 'status', 'date', 'id'],
  computed: {
    statusType() {
      return Status[this.status].type
    },
    statusName() {
      return Status[this.status].name
    },
    deadline() {
      return new Date(this.date).toLocaleDateString()
    },
  },
}
</script>

<style scoped></style>
