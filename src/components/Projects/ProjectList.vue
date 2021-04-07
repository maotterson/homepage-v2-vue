<template>
    <v-slide-group
        v-model="model"
        class="pa-4"
        show-arrows
    >
        <ProjectListItem 
            v-for="project in projects" 
            :key="project.name"
            class = "project-list-item"
            :project="project"
        />
        
    </v-slide-group>
</template>

<script>
import ProjectListItem from "./ProjectListItem";
export default {
    components:{
        ProjectListItem
    },
    props: {
        projects : {
            type: Array,
            default: () => [
                {
                    name: 'Ohio Vaccine Map',
                    description:'A searchable map of nearby available COVID-19 vaccine appointments in Ohio.'
                },
                {
                    name: 'OpenWeather Map',
                    description:'An interactive map that provides some basic weather information at a given location.'
                }
            ]
        }
    }
}
</script>

<style>
</style>