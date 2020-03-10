<template>
  <div id="app">
    <SampleEvent></SampleEvent>
    <SampleSlot>親です</SampleSlot>
    <SampleSlot></SampleSlot>
  </div>
</template>

<script>
import SampleEvent from './components/SampleEvent.vue';
import SampleSlot from './components/SampleSlot.vue';

export default {
  name: 'App',
  components: {
    SampleEvent,
    SampleSlot
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
