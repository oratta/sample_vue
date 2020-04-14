<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter-label">{{ count }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Home',
  components: {
  },
  computed: {
    ...mapState(['count']),
  },
}
</script>
