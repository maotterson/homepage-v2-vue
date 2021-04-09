<template>
    
        <v-card
            class="ma-2 project-list-item"
            tile
            flat
            width="300"
            @click="onClickedListItem"
        >
            <v-card-title>
                {{project.name}}    
            </v-card-title>
        </v-card>   
</template>

<script>
import { bus } from '../../main'
export default {
    props: ['project'],
    data () {
        return {
            active : false
        }
    },
    methods: {
        onClickedListItem(){
            bus.$emit("listItemSelected", this.project);
        }
    },
    created (){
        
    },
}
</script>

<style lang="scss" scoped>

    .project-list-item{
        margin-left:5px;
    }
</style>