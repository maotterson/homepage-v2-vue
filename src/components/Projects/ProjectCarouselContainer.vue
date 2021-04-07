<template>
    <v-sheet
        class="mx-auto"
        elevation="0"
        max-width="800"
        height="800"
        outlined
    >
        <ProjectList />
        <ProjectDetails />
    </v-sheet>
</template>

<script>
import ProjectList from "./ProjectList";
import ProjectDetails from "./ProjectDetails";
export default {
    components:{
        ProjectList,
        ProjectDetails
    }

}
</script>

<style>

</style>