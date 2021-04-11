<template>
  <div 
    id="app"
  >
    <NavPane />
    <transition
      name="fade"
    >
      <router-view 
        class="page-container"
      />
    </transition>
  </div>
</template>
<script>
import NavPane from "./components/Navigation/NavPane";
import { bus } from './main'

export default {
  components:{
    NavPane
  },
  data () {
      return {
          showDrawer: false
      }
  },
  created () {
    this.addEventListeners();
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    addEventListeners(){
      bus.$on('orderScrollUp', () =>{
        window.scroll(0,0);
        bus.$emit('isLight');
      })
      bus.$on('toggleNav', bool =>{
        this.showDrawer = bool;
        if(this.showDrawer){
          document.getElementsByTagName('html')[0].style.overflow = "hidden";
        }
        else{
          document.getElementsByTagName('html')[0].style.overflow = "overlay";
        }
      })
      bus.$on('drawerClosed', () =>{
        this.showDrawer = false;
        document.getElementsByTagName('html')[0].style.overflow = "overlay";
      })
      window.addEventListener('scroll', this.handleScroll);
    },
    handleScroll() {
      document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
      this.handleThemeByLocation()
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
    padding-top:40vh;
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
  height:130vh;
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
