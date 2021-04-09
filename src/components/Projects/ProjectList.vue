<template>
    <v-sheet>
        <ProjectListItem 
            v-for="project in projects" 
            :key="project.name"
            class = "project-list-item"
            :project="project"
        />
    </v-sheet>
</template>

<script>
import { bus } from '../../main'
import ProjectListItem from "./ProjectListItem";
export default {
    components:{
        ProjectListItem
    },
    props: ['projects'],
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
    
}
</script>

<style>
.project-slide-group{
    padding-bottom:5vh;
}
</style>