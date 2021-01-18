<template>
  <div class="card card-w70">
    <template v-if="resume.length !== 0">
        <template v-for="{type, value} in resume" :key="Math.ceil(Math.random() * 100000)">
          <component
            :is="`app-${type}-component`"
            :value="value"
          ></component>
        </template>
    </template>
    <template v-else>
      <h3>Добавьте первый блок, чтобы увидеть результат</h3>
    </template>
  </div>
</template>

<script>
import AppTitleComponent from './AppTitleComponent.vue'
import AppAvatarComponent from './AppAvatarComponent.vue'
import AppSubtitleComponent from './AppSubtitleComponent.vue'
import AppTextComponent from './AppTextComponent.vue'
export default {
  components: { AppTitleComponent, AppAvatarComponent, AppTextComponent, AppSubtitleComponent },
  props: {
    resume: {
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped></style>
