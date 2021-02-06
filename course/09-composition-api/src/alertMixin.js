export default {
  data() {
    return {
      alertVisible: false
    }
  },
  methods: {
    toggleAlert() {
      this.alertVisible = !this.alertVisible
    }
  },
}