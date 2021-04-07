<template>
  <v-list dense nav>
            <v-list-item 
                v-for="route in routes" 
                :key="route.name" 
                :to="route.path"
            >
                <v-list-item-icon>
                    <v-icon>
                        {{route.icon}}
                    </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>
                        {{route.name}}
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
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

<style>

</style>