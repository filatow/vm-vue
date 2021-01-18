<template>
  <div class="card">
    <ul>
      <li v-for="(item, ind) in 5">
        <slot :elem="item" :ind="ind"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>