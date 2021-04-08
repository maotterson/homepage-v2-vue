<template>
  <div id="app">
    <Navbar />
    <NavDrawer />
    <router-view class="page-container" />
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
@import './assets/styles/variables.css';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: var(--font-family);
  color:var(--primary-color);
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

em{
  color:red !important;
  font-style:normal;
}

.page-container{
  /*
  border: 1px dotted black;
  background-color:antiquewhite;
  */
  padding-top:2vh;
  height:100vh;
  text-align:left;
  padding-left:2vw;

  h1{
    font-size:3rem;
    padding-bottom:2rem;
  }
  h2{
    font-size:2.5rem;
    padding-bottom:2rem;
  }
  p{
    font-size:1.5rem;
    padding-bottom:2rem;
  }
  ul{
    font-size:1.5rem;
    list-style-type:none;
  }
}
</style>
