<template>
  <!-- 底部内容 -->
  <div class="my-footer">
        <ul>
            <!-- 跳转可以用router-link router-link默认生成a标签 -->
            <!-- 怎么改变router-link的标签呢? tag="" -->
          <router-link tag="li" to="/hot">
            <a>
              <span class="iconfont icon-remen"></span>
              <p>正在热映</p>
            </a>
          </router-link>
          <router-link tag="li" to="/movie">
            <a>
              <span class="iconfont icon-dianying"></span>
              <p>即将上映</p>
            </a>
          </router-link>
          <router-link tag="li" to="/top">
            <a>
              <span class="iconfont icon-top"></span>
              <p>top250</p>
            </a>
          </router-link>
        </ul>
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
