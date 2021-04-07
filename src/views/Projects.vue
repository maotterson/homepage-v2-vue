<template>
    <div id="projects">
        <h1>Projects.</h1>
        <ProjectList />
    </div>
</template>

<script>
import ProjectList from "../components/Projects/ProjectList";
export default {
    components:{
        ProjectList
    },
    props:{
        projects: [
            {
                title: 'Ohio Vaccine Map',
                description:'A searchable map of nearby available COVID-19 vaccine appointments in Ohio.'
            },
            {
                title: 'OpenWeather Map',
                description:'An interactive map that provides some basic weather information at a given location.'
            }
        ]
    }
}
</script>

<style>

</style>