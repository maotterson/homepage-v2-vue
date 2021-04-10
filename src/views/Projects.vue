<template>
    <v-container 
        id="projects"
        fluid>
        <v-sheet
            class="container-fluid title-sheet"
        >
            <h1>Projects.</h1>
        </v-sheet>
        <v-sheet
            class="container--fluid dark projects-summary"
            height="100vh"
        >
            <ProjectList id="slide2-header" :projects="projects" />
        </v-sheet>
            
        
    </v-container>
</template>

<script>
import ProjectList from "../components/Projects/ProjectList";
export default {
    components:{
        ProjectList
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
                },
                {
                    name: 'Android Geography Quiz',
                    description:'A geography game inspired by Traveler IQ. Made for an android device..',
                    image: 'cloud',
                },
                {
                    name: 'Android Blackjack',
                    description:'A basic implementation of blackjack for an android device.',
                    image: 'cloud',
                },
                
                {
                    name: 'Tesseract JS Demo',
                    description:'A basic vue implementation of the Tesseract JS text parsing API.',
                    image: 'cloud',
                }
            ]
        }
    }
}
</script>

<style>
.projects-summary{
    padding-top:50vh;
}
</style>