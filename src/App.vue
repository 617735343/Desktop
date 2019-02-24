<template>
  <div id="app">
    <!-- 我的路由的内容被加载过一次的时候，我就把路由中的内容放到内存之中，下一次再进这个路由的时候，不需要你再重新渲染这个组件，去重新执行钩子函数，只需要你从内存里把以前的内容拿出来显示在页面上就可以了 -->
    <!-- exclude指的是除了Detail这个页面不被缓存，其他的都能缓存 -->
    <keep-alive exclude="Detail">
    <!--显示的是当前路由地址所对应的内容-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>
