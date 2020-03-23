<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter-label">{{ count }}</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  computed: {
    count: function(){
      return this.$store.state.count;
    }
  }
}
</script>
