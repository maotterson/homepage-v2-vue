<template>
    <v-sheet
        id="project-list-sheet">
            <ProjectDetails
                v-for="(project, index) in projects" 
                :key="project.name"
                class="project-list-item"
                :class="(index%2 == 0) ? 'dark left-details' : 'light right-details'"
                :alignLeft="(index%2 == 0) ? true : false"
                :project="project"
            />
    </v-sheet>
</template>

<script>
import { bus } from '../../main'
import ProjectDetails from "./ProjectDetails";
export default {
    components:{
        ProjectDetails
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