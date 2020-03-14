<template>
<ul class="list">
          <li v-for="item in list" :key="item.id">
            <a href="./item.html">
              <img :src="`https://images.weserv.nl/?url=${item.images.small}`">
              <div class="info">
                <h3>{{item.title}}</h3>
                <p>豆瓣评分：{{item.rating.average}}</p>
                <p><span v-for="obj in item.genres" :key="obj" class="tag">{{obj}}</span></p>
              </div>
            </a>
          </li>
        </ul>
</template>

<script>
// 在公共组件中引入 list数据
import { mapState } from 'vuex'
export default {
  computed: {

    ...mapState(['list'])
  }

}
</script>

<style>

</style>
