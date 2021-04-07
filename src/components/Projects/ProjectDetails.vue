<template>
    <v-expand-transition>
        <v-sheet
            v-if="model != null"
            height="200"
            tile
        >
            <v-row
            class="fill-height"
            align="center"
            justify="center"
            >
                <h3 class="title">
                    Selected {{ model }}
                </h3>
            </v-row>
        </v-sheet>
    </v-expand-transition>
</template>

<script>
import { bus } from '../../main'
export default {
    data () {
        return {
            model: null
        }
    },
    created (){
        bus.$on('listItemSelected', project => {
            console.log(project)
            this.model = project;
        })
    },
    

}
</script>

<style>

</style>