<style type="text/css">
  .counter {
    color: red;
  }
</style>

<template>
  <div class="counter">
    <h3>Counter Idx {{ idx }}</h3>
    click times : <span v-text="clickTimes"></span><br>
    total click times: {{total}}
    <button @click="clickButton">click me</button>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['idx', 'total'],
    data() {
      return {
        clickTimes: 0
      }
    },
    methods: {
      clickButton() {
        this.clickTimes ++
        this.$dispatch('dispatch-click-one-time')
      }
    }
  }
</script>