<style type="text/css">
  
</style>

<template>
  <button @click="clickOneTime(idx)">Click Me</button>
</template>

<script type="text/javascript">
  import { clickOneTime } from '../vuex/actions'

  import { getEventBus } from '../vuex/getters'

  export default {
    vuex: {
      actions: {
        clickOneTime
      },
      getters: {
        eventBus: getEventBus
      }
    },
    props: ['idx'],
    methods: {
      clickIt(idx) {
        this.clickOneTime(idx)
        this.eventBus.$emit('click-one-time')
      }
    }
  }
</script>