<template>
  <div id="app">
    <router></router>
    <router-view/>
    <page-header></page-header>
  </div>
</template>

<script>
import Header from "./components/Counter/Header";
import Router from "./components/Counter/Router";
import PageHeader from "./components/PageHeader";


export default {
  name: 'app',
  components: {
    Router,
    Header,
    PageHeader
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
