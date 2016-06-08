<style type="text/css">
  
</style>

<template>
  <button @click="clickOneTime(idx)">Click Me</button>
</template>

<script type="text/javascript">
  import { clickOneTime } from '../vuex/actions'

  export default {
    vuex: {
      actions: {
        clickOneTime
      }
    },
    props: ['idx']
  }
</script>