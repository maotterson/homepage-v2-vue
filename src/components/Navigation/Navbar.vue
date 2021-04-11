<template>
    <v-app-bar
        id="navbar"
        ref="navBar"
        flat
        fixed
        :class="isDark ? 'dark' : 'light'"
    >
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon
            id="nav-icon"
            @click="onClickNavIcon"
            class="app-bar-icon"
        >
        </v-app-bar-nav-icon>
    </v-app-bar>
</template>

<script>
import { bus } from '../../main'

export default {
    data () {
        return {
            showDrawer: false,
            isDark: false
        }
    },
    created (){
        this.addEventListeners();
    },
    mounted(){
        bus.$emit('navBarMounted',this.$refs.navBar.$el.clientHeight);
    },
    methods: {
        onClickNavIcon(){
            this.toggleNavDrawer();
        },
        toggleNavDrawer(){
            if(this.showDrawer){
                this.showDrawer = false;
            }
            else{
                this.showDrawer = true;
            }
            bus.$emit('toggleNav', this.showDrawer);
        },
        addEventListeners(){
            bus.$on('drawerClosed', () => {
                this.showDrawer = false;
            })
            bus.$on('isDark', () => {
                this.isDark = true;
            })
            bus.$on('isLight',() => {
                this.isDark = false;
            })
        }
    }
}
</script>

<style>
#navbar{
    background-color:var(--background-color-light);
    width:100vw;
}

#nav-icon{
    background-color:inherit !important;
    color:inherit !important;
}


</style>