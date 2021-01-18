<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <app-button
      @action="open"
    >{{ isNewsOpen ? 'Закрыть' : 'Открыть' }}</app-button>
    <app-button
      color="danger"
      @click="$emit('renew-news', id)"
      v-if="wasRead"
    >Отметить новой</app-button>
    <div v-if="isNewsOpen">
      <hr />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil aliquid
        ipsa tempora soluta, voluptatum voluptatibus? Aliquam earum id totam
        consequatur cumque ex quia eaque deleniti laboriosam ipsum? Praesentium,
        eaque natus.
      </p>
      <app-button
        color="primary"
        @click="mark"
        v-if="!wasRead"
      >Прочесть новость</app-button>
      <app-news-list></app-news-list>
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton.vue'
import AppNewsList from './AppNewsList';

export default {
  // props: [`title`],
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(value) {
        // console.log(value)
        return true
      },
    },
    wasRead: {
      type: Boolean,
      required: true,
    },
  },
  // emits: ['open-news'],
  emits: {
    'open-news': null,
    'read-news'(id) {
      if (id) {
        return true
      }
      console.warn('Нет параметра id для emit read-news')
      return false
    },
    'renew-news'(id) {
      if (id) {
        return true
      }
      console.warn('Нет параметра id для emit renew-news')
      return false
    },
  },
  data() {
    return {
      isNewsOpen: this.isOpen,
    }
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('open-news')
      }
    },
    mark() {
      this.isNewsOpen = false
      if (!this.wasRead) {
        this.$emit('read-news', this.id)
      }
    },
    // renew() {
    //   if (this.wasRead) {
    //     this.$emit('renew-news', this.id)
    //   }
    // }
  },
  components: {
    AppButton,
    AppNewsList
  }
}
</script>
