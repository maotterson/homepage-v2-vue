<template>
    <v-container
        id="navbar"
        fluid
        flat
        fixed
        :class="isDark ? 'dark' : 'light'"
    >
        <v-col>
            <v-row>
                <v-spacer></v-spacer>
                <v-app-bar-nav-icon
                    id="nav-icon"
                    @click="onClickNavIcon"
                    class="app-bar-icon"
                >
                </v-app-bar-nav-icon>
            </v-row>
            <v-row>
                <v-container
                    v-if="showDrawer"
                    id="drawer"
                    fluid
                >
                    <NavLinkList />
                </v-container>
            </v-row>
        </v-col>
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
    padding-left:1vw;
    padding-right:1vw;
}

#nav-icon{
    background-color:inherit !important;
    color:inherit !important;
    margin-left:1vw;
    margin-right:1vw;
}

#drawer{
    height:100vh;
}

</style>