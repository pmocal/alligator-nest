<template>
  <div id="app">
    <h1 class="row1 col12">Alligator Nest</h1>
    <router-link to="/travel" class="row1 col3">Travels</router-link>
    <router-link to="/about" class="row1 col4">About</router-link>
    <router-view class="row2 col234"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
html, body {
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 2%;
  height: 100%;
  display: grid;
  grid-template-rows: 20% 80%;
  grid-template-columns: 25% 25% 25% 25%;
}
</style>
