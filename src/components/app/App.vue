<style type="text/css">
  body {
    margin: 0;
    padding: 0;
  }
  .app {
    color: #787878;
    background-color: #fff;
  }
  .app-bar {
    display: block;
    list-style: none;
    padding: 0;
    margin: 0;
    padding: 15px;
    border-bottom: 1px solid #ccc;
  }
  .app-bar-li {
    list-style: none;
    display: inline-block;
    padding: 15px;
    font-size: 24px;
    cursor: pointer;
  }
  .on {
    color: blue;
  }
  .app-content {
    padding: 30px;
  }
  .fade-transition {
    transition: opacity .3s ease;
  }
  .fade-enter, .fade-leave {
    opacity: 0;
  }
</style>

<template>
  <div class="app">
    <ul class="app-bar">
      <li v-for="item in demoList" @click="currentDemo = item.id" class="app-bar-li" :class="{'on': currentDemo == item.id}"><a href="javascript:;"></a>{{ item.id | upper }}</li>
    </ul>
    <div class="app-content">
      <components :is="currentDemo" keep-alive transition="fade" transition-mode="out-in"></components>
      <common-cpt v-show="currentDemo == 'Demo2'"></common-cpt>
    </div>

    
  </div>
</template>

<script type="text/javascript">
  import Demo1 from '../demo1/Demo1.vue'

  import Demo2 from '../demo2/Demo2.vue'

  import Demo3 from '../demo3/Demo3.vue'

  import Demo4 from '../demo4/Demo4.vue'

  import CommonCpt from '../commoncpt/Commoncpt.vue'

  export default {
    data() {
      return {
        demoList: [
          {
            id: 'Demo1'
          },
          {
            id: 'Demo2'
          },
          {
            id: 'Demo3'
          },
          {
            id: 'Demo4'
          }
        ],
        currentDemo: ''
      }
    },
    events: {
      'dispatch-update-total-click-times': function(times) {
        this.$broadcast('broadcast-update-total-click-times', times)
      }
    },
    components: {
      Demo1,
      Demo2,
      Demo3,
      Demo4,
      CommonCpt
    }
  }
</script>