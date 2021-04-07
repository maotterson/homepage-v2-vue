<template>
    <v-app-bar id="navbar"
        flat
    >
        <v-app-bar-nav-icon 
            @click="onClickNavIcon"
        >
        </v-app-bar-nav-icon>
    </v-app-bar>
</template>

<script>
import { bus } from '../../main'

export default {
    data () {
        return {
            showDrawer: false
        }
    },
    created (){
        bus.$on('drawerClosed', () => {
            this.showDrawer = false;
        })
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