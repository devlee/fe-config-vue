<style type="text/css">
  .demo2 {
    color: #999;
  }
</style>

<template>
<div>
  <Demo :title="'COUNTER'">
    <div class="demo2" slot="content">
      <Counter :idx="0" :total="totalClickTimes"></Counter>
      <Counter :idx="1" :total="totalClickTimes"></Counter>
      <Counter :idx="2" :total="totalClickTimes"></Counter>
    </div>
  </Demo>
</div>
</template>

<script type="text/javascript">
  import Demo from '../demo/Demo.vue'

  import Counter from '../counter/Counter.vue'

  export default {
    data() {
      return {
        totalClickTimes: 0
      }
    },
    events: {
      'dispatch-click-one-time': function() {
        this.totalClickTimes ++
        this.$dispatch('dispatch-update-total-click-times', this.totalClickTimes)
      }
    },
    components: {
      Demo,
      Counter
    }
  }
</script>