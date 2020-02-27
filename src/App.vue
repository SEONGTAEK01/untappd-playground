<template>
  <div id="app">
    <img src="./assets/logo.png">
    <app-header></app-header>
<!--    <app-graph></app-graph>-->
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Graph from "./components/Graph";

export default {
  name: 'App',
  components: {
    'app-header': HelloWorld,
    'app-graph': Graph
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
