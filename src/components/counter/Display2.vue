<style type="text/css">
  
</style>

<template>
  <div>
    Total Click Times: {{ count }}
    <div>
      <div v-for="(k, v) of countList">idx: {{ k }} click times: {{ v }}</div>
    </div>
  </div>
  
</template>

<script type="text/javascript">
  import { getEventBus, getCountList } from '../vuex/getters'

  export default {
    vuex: {
      getters: {
        eventBus: getEventBus,
        countList: getCountList
      }
    },
    data() {
      count: 0
    },
    ready() {
      this.eventBus.$on('click-one-time', function() {
        this.count ++
      })
    }
  }
</script>