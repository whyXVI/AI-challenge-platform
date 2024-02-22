<template>
  <div id="app" min-height=100vh min-width=100vw>
    <router-view></router-view> <!-- 使用router-view显示当前路由组件 -->
  </div>
</template>

<script>
export default {
  name: 'App',
  // 无需在这里注册LoginForm组件
}
</script>
