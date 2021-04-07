<template>
    <v-expand-transition>
        <v-sheet
            v-if="project != null"
            tile
            outlined
        >
            <h2>{{project.name}}</h2>
            <p>{{project.description}}</p>
        </v-sheet>
    </v-expand-transition>
</template>

<script>
import { bus } from '../../main'
export default {
    data () {
        return {
            project: null
        }
    },
    created (){
        bus.$on('listItemSelected', project => {
            this.project = project;
        })
    },
    

}
</script>

<style>

</style>