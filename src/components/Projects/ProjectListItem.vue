<template>
    <v-card
        class="ma-4 project-list-item"
        tile
        flat
        width="300"
        height="300"
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
    props: ['project', 'alignLeft'],
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
        display:inline-flex;
    }
</style>