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
  import { getCount, getCountList } from '../vuex/getters'

  export default {
    vuex: {
      getters: {
        count: getCount,
        countList: getCountList
      }
    }
  }
</script>