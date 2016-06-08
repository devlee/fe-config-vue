<style type="text/css">
  .demo {
    background-color: #eee;
    padding: 10px;
  }
  .demo-title {
    color: #333;
  }
</style>

<template>
  <div class="demo">
    <slot name="title">
      <div class="demo-title">
        {{ title || 'default demo title' }}
      </div>
    </slot>
    <slot name="content">
      default demo content
    </slot>
    <hr>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['title'],
    ready() {
      console.log('Demo Loaded')
    }
  }
</script>