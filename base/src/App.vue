<template>
  <div>
    <el-menu :router="true" mode="horizontal">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/micro1">微应用1</el-menu-item>
      <el-menu-item index="/micro2">微应用2</el-menu-item>
    </el-menu>
    <router-view />
    <div id="container"></div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
