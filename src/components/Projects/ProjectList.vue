<template>
    <v-sheet
        class="dark"
        id="project-list-sheet">
            <ProjectListItem 
                v-for="project in projects" 
                :key="project.name"
                class = "project-list-item dark"
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

.project-list-sheet{
    display:flex;
    flex-direction:row;
    
}
</style>