<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import web3App from './libs/web3-app'

  export default {
    name: 'App',
    mounted() {
      web3App.init();
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
