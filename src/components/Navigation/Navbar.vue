<template>
    <v-app-bar
        id="navbar"
        ref="navBar"
        flat
        fixed
    >
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon 
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
        }
    },
    created (){
        bus.$on('drawerClosed', () => {
            this.showDrawer = false;
        })
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
        }
    }
}
</script>

<style>
#navbar{
    background-color:var(--background-color-light);
}


</style>