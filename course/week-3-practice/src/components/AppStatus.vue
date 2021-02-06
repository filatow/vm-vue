<template>
  <span :class="['badge', type]">{{ name }}</span>
</template>

<script>
export default {
  props: ['type', 'name']
}
</script>