<template>
    <v-container
        id="navbar"
        fluid
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
        <v-container
            v-if="showDrawer"
            id="drawer"
            fluid
        >
            <NavLinkList />
        </v-container>
    </v-container>
</template>

<script>
import { bus } from '../../main'
import NavLinkList from "../Navigation/NavLinkList";

export default {
    components:{
        NavLinkList
    },
    data () {
        return {
            showDrawer: false,
            isDark: false
        }
    },
    created (){
        this.addEventListeners();
    },
    destroyed(){
        this.removeEventListeners();
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
        },
        removeEventListeners(){
        }
    }
}
</script>

<style>
#navbar{
    background-color:var(--background-color-light);
    position:fixed;
    top:0px;
    left:0px;
    z-index:999;
    overflow-y:hidden;
}

#nav-icon{
    background-color:inherit !important;
    color:inherit !important;
}

#drawer{
    height:100vh;
}

</style>