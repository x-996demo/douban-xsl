<template>
<!-- app.vue是根组件 -->
  <div id="app">
<!-- 头部组件 -->
      <LayoutHeader />
    <router-view/>
    <!-- 尾部组件 -->
    <LayoutFooter />
  </div>
</template>
<script>
import LayoutHeader from '@/components/layout-header'
import LayoutFooter from '@/components/layout-footer'
export default {
  components: {
    LayoutHeader,
    LayoutFooter
  }
}
</script>
<style lang="less">

</style>
