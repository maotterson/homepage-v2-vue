<template>
    <v-container
        class="projects-summary"
        height="100vh"
        fluid
    >
        <v-row>
            <v-col 
                cols="12"
                sm="4"
                v-if="alignLeft">
                <p>{{project.description}}</p>
                <p>{{align}}</p>
            </v-col>
            <v-col
                cols="12"
                sm="4">
                IMAGE HERE
            </v-col>
            <v-col 
                cols="12"
                sm="4"
                v-if="!alignLeft">
                <p>{{project.description}}</p>
                <p>{{align}}</p>
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
    

}
</script>

<style>
.projects-summary{
    padding-top:50vh;
    height:100vh;
}

</style>