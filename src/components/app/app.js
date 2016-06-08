import Vue from 'vue'

import App from './App.vue'

Vue.filter('upper', (value) => {
  return value.toUpperCase()
})

new Vue({
  el: 'body',
  components: {
    App
  },
  ready() {
    console.log('Vue Loaded')
  }
})
