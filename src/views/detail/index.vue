<template>
  <div class="item" v-if="detail">
        <img :src="`https://images.weserv.nl/?url=${detail.images.large}`" alt="">
        <div>
          <p>豆瓣评分：{{detail.rating.average}}</p>
          <p>产地：{{detail.countries[0]}}</p>
          <p><span v-for="item in detail.genres" :key="item" class="tag">{{item}}</span></p>
         <p>{{detail.summary}}</p>
        </div>
      </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  created () {
    // 尝试调用action方法
    this.$store.dispatch('getDetail', this.$route.params.id)// 调用action的方法
  },
  computed: {

    ...mapState(['detail'])
  }

}
</script>

<style>

</style>
