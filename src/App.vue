<template>
  <div id="app">
    <SampleSwitchComponent></SampleSwitchComponent>
    <SampleEvent></SampleEvent>
    <SampleSlot>親です</SampleSlot>
    <SampleSlot></SampleSlot>
  </div>
</template>

<script>
import SampleEvent from './components/SampleEvent.vue';
import SampleSlot from './components/SampleSlot.vue';
import SampleSwitchComponent from './components/SampleSwitchComponent.vue';

export default {
  name: 'App',
  components: {
    SampleEvent,
    SampleSlot,
    SampleSwitchComponent,
  },
  data: ()=>({
    current: 0,
    components: ['Member', 'New', 'Env']
  }),
  computed: {
    currentBanner: function() {
      return 'Banner' + this.components[this.current];
    }
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
