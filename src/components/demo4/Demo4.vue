<style type="text/css">
  
</style>

<template>
  <div>
    <Demo :title="'COUNTER EVENT BUS'">
      <div class="demo4" slot="content">
        <Display></Display>
        <Counter2 :idx="0"></Counter2>
        <Counter2 :idx="1"></Counter2>
        <Counter2 :idx="2"></Counter2>
      </div>
    </Demo>
  </div>
</template>

<script type="text/javascript">
  import Demo from '../demo/Demo.vue'

  import Display from '../counter/Display.vue'

  import Counter2 from '../counter/Counter2.vue'

  import store from '../vuex/store'

  export default {
    components: {
      Demo,
      Display,
      Counter2
    },
    store
  }
</script>