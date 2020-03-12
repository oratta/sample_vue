<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button v-on:click="onClick">トップへ</button>
  </div>
</template>
<script>
export default {
  methods: {
    onClick: function(){
      this.$router.push('/');
    }
  }
}
</script>
