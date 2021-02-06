<template>
  <div class="card">
    <h1>Пользователи</h1>
    <Suspense>
      <user-list></user-list>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserList from '../components/UserList.vue'

export default defineComponent({
  components: { UserList },
})
</script>
