<template>
    <v-list dense nav>
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
        },
        closeDrawer(){
            bus.$emit('drawerClosed');
        }
    }
}
</script>

<style lang="scss" scoped>
    .list-item{
        height:auto;
    }
    .item-title{
        font-size:2em !important;
        line-height:2em !important;
        height:auto;
    }
    .item-content{
        height:auto;
    }
</style>