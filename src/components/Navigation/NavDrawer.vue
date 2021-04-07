<template>
    <v-navigation-drawer id="drawer"
        v-model="showDrawer"
        absolute
        temporary
        @transitionend="onTransitionEnd"
    >
        <NavHeader />
        <NavLinkList />
    </v-navigation-drawer>
</template>

<script>
import NavHeader from "./NavHeader";
import NavLinkList from "./NavLinkList";
import { bus } from '../../main'

export default {
    components: {
        NavHeader,
        NavLinkList
    },
    data () {
        return {
            showDrawer: false
        }
    },
    created (){
        bus.$on('toggleNav', showDrawer => {
            this.showDrawer = showDrawer
        })
    },
    methods:{
        onTransitionEnd(){
            // check to see if the drawer is "closed" when there is a transition on the element
            if(document.getElementById("drawer").style.transform == "translateX(-100%)"){
                this.closeDrawer()
            }
        },
        closeDrawer(){
            this.showDrawer = false;
            bus.$emit('drawerClosed');
        }
    }
}
</script>
<style scoped>
@media screen {
    #drawer{
        width:100%;
    }
}
</style>