<template>
    <v-navigation-drawer permanent>
        <v-list
            dense
            nav
        >
            <router-link 
                v-for="route in routes" 
                :key="route.name"
                tag="v-list-item" 
                :to="route.path"
            >
                {{route.name}}
            </router-link>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    computed: {
        routes : function() {
            return this.$router.options.routes;
        }
    }
    
}
</script>
<style scoped>

</style>