<template>
    <v-container
        id="drawer"
        ref="drawer"
        fluid
        :class="[(showDrawer ? 'expanded' : 'shrunk'), (isDark ? 'dark' : 'light')]"
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
            showDrawer: false,
            isDark: false
        }
    },
    created (){
        this.addEventListeners();
    },
    methods: {
        addEventListeners(){
            bus.$on('toggleNav', showDrawer => {
                this.showDrawer = showDrawer
            })
            bus.$on('drawerClosed', () => {
                this.showDrawer = false
            })
            bus.$on('navBarMounted',navBarHeight => {
                const offsetHeight = navBarHeight
                this.setOffsetHeight(offsetHeight)
            })
            bus.$on('isDark', () => {
                this.isDark = true;
            })
            bus.$on('isLight',() => {
                this.isDark = false;
            })
        },
        setOffsetHeight(offsetHeight){
            this.$refs.drawer.style.top=`${offsetHeight}px`
        },
    }
}
</script>
<style scoped>
.expanded{
    height:100vh !important;
    overflow-y:hidden;
    touch-action: none;
}
.shrunk{
    height:0px !important;
    visibility:hidden !important;
}

#drawer{
    position:fixed;
    left:0;
    background-color:white;
    z-index: 100;
    overflow:hidden;
    touch-action: none;
}
@media screen {
    
}
</style>