<template>
    <v-container
        id="drawer" 
        fluid
        :class="showDrawer ? 'expanded' : 'shrunk'"
    >
        <NavLinkList />
    </v-container>
</template>

<script>
//todo: hide drawer whitespace that shows up
import NavLinkList from "./NavLinkList";
import { bus } from '../../main'

export default {
    components: {
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
        }),
        bus.$on('drawerClosed', () => {
            this.showDrawer = false
        })
    }
}
</script>
<style scoped>
.expanded{
    height:100vh !important;
    overflow-y:hidden !important;
}
.shrunk{
    height:0px !important;
    visibility:hidden !important;
}

#drawer{
    position:fixed;
    top:5vh;
    left:0;
    background-color:white;
}
@media screen {
    
}
</style>