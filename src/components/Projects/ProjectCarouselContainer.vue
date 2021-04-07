<template>
    <v-sheet
        class="mx-auto"
        elevation="8"
        max-width="800"
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