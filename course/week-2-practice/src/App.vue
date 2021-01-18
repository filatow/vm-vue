<template>
  <div class="container column">
    <form class="card card-w30" @submit.prevent="addBlock">
      <app-block-type
        v-model:value="blockType"
      ></app-block-type>
      <app-block-value
        v-model:value="blockValue"
      ></app-block-value>
      <app-add-block
        :disabled="isAddBlockDisabled"
      ></app-add-block>
    </form>

    <app-resume-blocks
      :resume="this.resume"
    ></app-resume-blocks>

  </div>

  <div class="container">
    <p>
      <app-button
        @action="loadComments"
        label="Загрузить комментарии"
      ></app-button>
    </p>

    <app-comment-list
      v-if="comments.length"
      :comments="comments"
    ></app-comment-list>

    <div class="loader" v-if="loading"></div>
  </div>
</template>

<script>
import axios from 'axios'
import AppAddBlock from './components/AppAddBlock.vue'
import AppBlockValue from './components/AppBlockValue.vue'
import AppBlockType from './components/AppBlockType.vue'
import AppResumeBlocks from './components/AppResumeBlocks.vue'
import AppButton from './components/AppButton.vue'
import AppCommentList from './components/AppCommentList.vue'

export default {
  components: {AppBlockType, AppBlockValue, AppAddBlock, AppResumeBlocks, AppButton, AppCommentList},
  data() {
    return {
      blockType: 'title',
      blockValue: '',
      resume: [],
      comments: [],
      loading: false
    }
  },
  methods: {
    addBlock() {
      this.resume.push({
        type: this.blockType,
        value: this.blockValue
      })
      this.blockValue = ''
    },
    async loadComments() {
      console.log('loadComments()')
      try {
        this.loading = true
        const commentsUrl = 'https://jsonplaceholder.typicode.com/comments?_limit=42'
        const {data} = await axios.get(commentsUrl)
        if (!data) {
          throw new Error('Комментарии отсутствуют')
        }
        this.comments = data;
      } catch (error) {
        console.log(error.message)
      } finally {
        this.loading = false
      }
    }
  },
  computed: {
    isAddBlockDisabled() {
      return this.blockValue.length <= 3
    }
  },
}
</script>

<style>

</style>
