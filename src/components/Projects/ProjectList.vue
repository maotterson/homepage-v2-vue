<template>
    <v-slide-group
        v-model="project"
        class="pa-4 project-slide-group"
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
import { bus } from '../../main'
import ProjectListItem from "./ProjectListItem";
export default {
    components:{
        ProjectListItem
    },
    data () {
        return {
            project: null
        }
    },
    created (){
        bus.$on('listItemSelected', project => {
            if(this.project!=project){
                this.project = project;
            }
        })
    },
    props: {
        projects : {
            type: Array,
            default: () => [
                {
                    name: 'Ohio Vaccine Map',
                    description:'A searchable map of nearby available COVID-19 vaccine appointments in Ohio.',
                    image: 'vaccine',
                },
                {
                    name: 'Open Weather Map',
                    description:'An interactive map that provides some basic weather information at a given location.',
                    image: 'cloud',
                }
            ]
        }
    }
}
</script>

<style>
.project-slide-group{
    padding-bottom:5vh;
}
</style>