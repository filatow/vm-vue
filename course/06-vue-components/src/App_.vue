<template>
  <div>
    <div class="container tp-1">
      <div class="card">
        <h2 class="headline">Актуальные новости {{ now }}</h2>
        <span>
          открыто: <strong>{{ openRate }}</strong>
          |
          прочитано: <strong>{{ readRate }}</strong>
        </span>
      </div>
      <app-news
        v-for="item in news" :key="item.id"
        :title="item.title"
        :id="item.id"
        :is-open="item.isOpen"
        :was-read="item.wasRead"
        @open-news="openNews"
        @read-news="readNews"
        @renew-news="renewNews"
      ></app-news>
    </div>
  </div>
</template>

<script>
import AppNews from './AppNews'

export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      openRate: 0,
      readRate: 0,
      news: [
        {
          title: 'Джо Байден победил на выборах в США',
          id: 1,
          isOpen: false,
          wasRead: false
        },
        {
          title: 'Vue3 успешно работает',
          id: 2,
          isOpen: false,
          wasRead: false
        }
      ],
    }
  },
  components: {
    'app-news': AppNews,
  },
  provide() {
    return {
      title: 'Список всех новостей',
      news: this.news
    }
  },
  methods: {
    openNews() {
      this.openRate++
    },
    readNews(id) {
      const ind = this.news.findIndex(item => item.id === id)
      this.news[ind].wasRead = true
      this.readRate++
    },
    renewNews(id) {
      const news = this.news.find(item => item.id === id)
      news.wasRead = false
      this.readRate--
    }
  },
}
</script>

<style scoped>
  h1, h2, h3, h4, h5, h6 {
    color: darkred;
  }
</style>
