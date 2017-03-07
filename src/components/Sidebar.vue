<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center">已有时长</h1>
    </div>

    <div class="panel-body">
      <h1 class="text-center">{{ time }} 小时</h1>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Sidebar',
    props: ['time']
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">

</style>
