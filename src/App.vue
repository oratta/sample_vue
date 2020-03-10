<template>
  <div id="app">
    <SampleSwitchComponent></SampleSwitchComponent>
    <SampleEvent></SampleEvent>
    <SampleSlot>親です</SampleSlot>
    <SampleSlot></SampleSlot>
    <div class="sample_component">
      <SampleComponent v-model="message"></SampleComponent>
      <p>入力値: {{message}}</p>
    </div>
  </div>
</template>

<script>
import SampleEvent from './components/SampleEvent.vue';
import SampleSlot from './components/SampleSlot.vue';
import SampleSwitchComponent from './components/SampleSwitchComponent.vue';
import SampleComponent from './components/SampleComponent.vue';

export default {
  name: 'App',
  components: {
    SampleEvent,
    SampleSlot,
    SampleSwitchComponent,
    SampleComponent,
  },
  data: ()=>({
    current: 0,
    components: ['Member', 'New', 'Env'],
    message: 'default'
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
