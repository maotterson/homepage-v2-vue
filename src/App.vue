<template>
  <div id="app">
    <Navbar />
    <NavDrawer />
    <router-view/>
  </div>
</template>
<script>
import NavDrawer from "./components/Navigation/NavDrawer";
import Navbar from "./components/Navigation/Navbar";

export default {
  components:{
    NavDrawer,
    Navbar
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:white;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
