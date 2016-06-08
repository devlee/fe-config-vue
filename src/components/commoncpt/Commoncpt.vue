<style type="text/css">

</style>

<template>
  <dic class="commoncpt">
    Total Click Times: {{ times }}
  </dic>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        times: 0
      }
    },
    events: {
      'broadcast-update-total-click-times': function(times) {
        this.times = times
      }
    }
  }
</script>