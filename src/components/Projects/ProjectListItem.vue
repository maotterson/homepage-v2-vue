<template>
    <v-slide-item>
        <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-4 project-list-item"
            tile
            flat
            outlined
            @click="onClickedListItem"
        >

            <v-img
                :src= "projectImage"
            >
            </v-img>
            <v-card-title>
                {{project.name}}    
            </v-card-title>
        </v-card>
    </v-slide-item>
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
    computed: {
        projectImage(){
            return this.active ? require(`../../assets/project-logos/${this.project.image}-2.svg`) : require(`../../assets/project-logos/${this.project.image}-1.svg`);
        }
    },
    methods: {
        onClickedListItem(){
            if(!this.active){
                bus.$emit("listItemSelected", this.project);
                this.active=true;
            }
            else{
                bus.$emit("listItemSelected",null);
                this.active=false;
            }
        }
    },
    created (){
        // notify the other projects that they are no longer active
        bus.$on('listItemSelected', project => {
            if(this.project!=project){
                this.active=false;
            }
        })
    },
}
</script>

<style lang="scss" scoped>

    .project-list-item{
        background-size:cover;
        background-repeat:no-repeat;
        margin-left:5px;
    }
</style>