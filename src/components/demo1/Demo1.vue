<style type="text/css">
  .demo1 {
    color: #666;
  }
</style>

<template>
<div>
  <Demo :title="'HELLO WORLD'">
    <div class="demo1" slot="content">
      <h1>Hello {{ name }}</h1>
      <input type="text" name="sth" v-model="name">
    </div>
  </Demo>
</div>
</template>

<script type="text/javascript">
  import Demo from '../demo/Demo.vue'

  export default {
    data() {
      return {
        name: 'World'
      }
    },
    components: {
      Demo
    }
  }
</script>