<template>
    <v-container
        class="projects-summary"
        fluid
    >
        <v-row
            class="project-summary-row">
            <v-col 
                class="project-column"
                v-if="alignLeft"
                cols="12"
                sm="4">
                <h2>{{project.name}}</h2>
                <p>{{project.description}}</p>
            </v-col>
            <v-col
                class="project-column"
                cols="12"
                sm="4">
                <v-container
                    fluid
                    ref="projectImage"
                    class="project-image">

                </v-container>
            </v-col>
            <v-col 
                class="project-column"
                v-if="!alignLeft"
                cols="12"
                sm="4">
                <h2>{{project.name}}</h2>
                <p>{{project.description}}</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { bus } from '../../main'
export default {
    props: ['project', 'alignLeft'],
    created (){
        bus.$on('listItemSelected', project => {
            this.project = project;
        })
    },
    mounted(){
        const imageUrl = require(`../../assets/project-logos/${this.project.image}-1.svg`);
        this.$refs.projectImage.style.backgroundImage = `url(${imageUrl})`
    }
    

}
</script>

<style>
.projects-summary{
    height:130vh;
}

.project-column{
    flex-grow:0;
}

.project-image{
    height:500px;
    width:500px;
    background-size:cover !important;
    background-position: center !important;
}

.project-summary-row{
    align-items:center !important;
    height:inherit;
    justify-content:space-around !important;
}

</style>