<template>
    <v-sheet
        class="container--fluid projects-summary"
        height="100vh"
    >
        <h2>{{project.name}}</h2>
        <p>{{project.description}}</p>
    </v-sheet>
</template>

<script>
import { bus } from '../../main'
export default {
    props: ['project'],
    created (){
        bus.$on('listItemSelected', project => {
            this.project = project;
        })
    },
    

}
</script>

<style>
.projects-summary{
    padding-top:50vh;
    height:100vh;
}

</style>