<template>
    <v-list class="list-container" dense nav>
        <v-list-item 
            v-for="route in routes" 
            :key="route.name" 
            :to="route.path"
            class = "list-item"
            @click="onClickedNavItem"
        >
            <v-list-item-content class="item-content">
                <v-list-item-title class="item-title">
                    {{route.name}}.
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
import { bus } from '../../main';
export default {
    computed: {
        routes : function() {
            return this.$router.options.routes;
        }
    },
    methods: {
        onClickedNavItem(){
            this.closeDrawer();
            this.scrollUp();
        },
        closeDrawer(){
            bus.$emit('drawerClosed');
        },
        scrollUp(){
            bus.$emit('orderScrollUp')
        }
    }
}
</script>

<style lang="scss" scoped>
    .list-item{
        height:auto;
        color:inherit !important;
        background-color:inherit !important;
    }
    .list-container{
        color:inherit !important;
        background-color:inherit !important;
    }
    .item-title{
        font-size:2em !important;
        line-height:2em !important;
        height:auto;
        color:inherit !important;
        background-color:inherit !important;
    }
    .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled){
        color:inherit !important;
    }
    .item-content{
        height:100%;
        color:inherit !important;
        background-color:inherit !important;
    }
</style>