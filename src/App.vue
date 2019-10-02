<template>
  <div id="app">
    <router></router>
    <router-view/>
  </div>
</template>

<script>
import Router from "./components/Counter/Router";


export default {
  name: 'app',
  components: {
    Router
  }
}
</script>

<style>
  /*#app {*/
  /*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*  -webkit-font-smoothing: antialiased;*/
  /*  -moz-osx-font-smoothing: grayscale;*/
  /*  text-align: center;*/
  /*  color: #2c3e50;*/
  /*  margin-top: 60px;*/
  /*}*/
</style>
