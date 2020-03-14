<template>
<!-- app.vue是根组件 -->
  <div id="app">
<!-- 头部组件 -->
      <LayoutHeader></LayoutHeader>
    <router-view/>
    <!-- 尾部组件 -->
  </div>
</template>
<script>
import LayoutHeader from '@/components/layout-header'
export default {
  components: {
    LayoutHeader
  }
}
</script>
<style lang="less">

</style>
