<template>
    <v-navigation-drawer
    >
        <NavHeader />
        <NavLinkList />
    </v-navigation-drawer>
</template>

<script>
import NavHeader from "./NavHeader";
import NavLinkList from "./NavLinkList";

export default {
    components: {
        NavHeader,
        NavLinkList
    }
}
</script>
<style scoped>

</style>