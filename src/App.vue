<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/article/188">記事No.188</router-link>|
      <router-link to="/article/225">記事No.225</router-link>|
      <router-link to="/article/13">記事No.13</router-link>|
      <router-link to="/article/108">記事No.108</router-link>
    </div>
    <router-view/>
    <router-view name="main"/>
    <router-view name="sub" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
