<template>
  <movie-list />
</template>

<script>
export default {
  created () {
    // 尝试调用action方法
    this.$store.dispatch('getList', 'coming_soon')// 调用action的方法
  }

}
</script>

<style>

</style>
