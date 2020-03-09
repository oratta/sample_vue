<template>
  <div id="app">
    <SampleEvent></SampleEvent>
  </div>
</template>

<script>
import SampleEvent from './components/SampleEvent.vue'

export default {
  name: 'App',
  components: {
    SampleEvent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
