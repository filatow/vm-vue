export default {
  install(app, options) {
    let current = 'ru'
    const changeLanguage = (lang) => {
      if (lang) {
        current = lang
      } else {
        current = current === 'ru' ? 'en' : 'ru'
      }
      console.log(current)
    }

    app.config.globalProperties.$alert = (text) => {alert(text)}

    app.config.globalProperties.$i18n = (key) => {
      return key.split('.').reduce((accum, k) => {
        return accum[k] || '=== UKNOWN ==='
      }, options[current])
    }

    app.provide('changeI18N', changeLanguage)
  }
}