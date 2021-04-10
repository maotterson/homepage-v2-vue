<template>
  <div id="app">
    <Navbar />
    <NavDrawer />
    <transition name="fade">
      <router-view class="page-container" />
    </transition>
  </div>
</template>
<script>
import Navbar from "./components/Navigation/Navbar";
import NavDrawer from "./components/Navigation/NavDrawer";
import { bus } from './main'

export default {
  components:{
    Navbar,
    NavDrawer
  },
  created () {
    this.addEventListeners();
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  data () {
        return {
            oldY : 0
        }
    },
  methods: {
    addEventListeners(){
      bus.$on('orderScrollUp', () =>{
        window.scroll(0,0);
        bus.$emit('isLight');
      })
      window.addEventListener('scroll', this.handleScroll);
    },
    handleScroll() {
      const scrollingDown = window.scrollY>this.oldY ? true : false;
      this.oldY = window.scrollY;
      if(scrollingDown){
        this.handleScrollDown()
      }
      else{
        this.handleScrollUp()
      }
      this.handleThemeByLocation()
    },
    handleScrollDown(){
      if(window.scrollY>500 && window.scrollY<800){
        const elmnt = document.getElementById("slide2-header");
        elmnt.scrollIntoView();
      }
    },
    handleScrollUp(){
      if(window.scrollY>500 && window.scrollY<800){
        window.scroll(0,0);
      }
    },
    handleThemeByLocation(){
      const offset = 150;
      if(window.scrollY > window.screen.availHeight + offset) {
        bus.$emit('isDark');
      }
      else if(window.scrollY < window.screen.availHeight + offset){
        bus.$emit('isLight');
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

.container{
  padding-left:0px;
  padding-right:0px;
}

.title-sheet{
  height:80vh;
}


.light{
  background-color:var(--light-bg) !important;
  color:var(--light-fg) !important;
}

.dark{
  background-color:var(--dark-bg) !important;
  color:var(--dark-fg) !important;
}


.fade-enter-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.center {
  text-align:center;
}

</style>
