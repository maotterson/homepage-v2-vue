<template>
  <div id="app">
    <Navbar />
    <NavDrawer />
    <router-view class="page-container" />
  </div>
</template>
<script>
import Navbar from "./components/Navigation/Navbar";
import NavDrawer from "./components/Navigation/NavDrawer";

export default {
  components:{
    Navbar,
    NavDrawer
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const titleSheet = document.querySelector(".title-sheet");
      if(window.scrollY > window.screen.availHeight-400 && !document.querySelector(".title-sheet-shrunk")) {
       titleSheet.classList="title-sheet-shrunk title-sheet";
       console.log(titleSheet.style.height)
      }
      else if(window.scrollY < 200 && document.querySelector(".title-sheet-shrunk")){
        titleSheet.classList="title-sheet";
      }
    }
  }
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
  padding-top:2vh;
  text-align:left;
  padding-left:2vw;

  h1{
    text-align:center;
    margin-top:40vh;
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

.title-sheet{
  height:100vh;
}

.title-sheet-shrunk{
  height:0vh !important;
}
</style>
