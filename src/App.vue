<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
// 请使用SCSS进行style编写
// 新页面请在views文件夹内新建页面名称文件夹，并创建index.vue主文件
// 当使用组件时，如果组件仅在当前页面使用请就近在当前页面文件夹内新建components文件夹，并将组件放置在此文件夹内
// 使用style标签请记得添加scoped属性，放置属性穿透
</script>
