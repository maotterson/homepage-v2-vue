<template>
    <v-slide-item
        v-slot="{ active }"
    >
        <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-4 project-list-item"
            :class="project.class"
            height="200"
            width="200"
            tile
            flat
            outlined
            @click="onClickedListItem"
        >
            <v-row
                class="fill-height"
                align="center"
                justify="center"
            >
                <v-scale-transition>
                    <v-icon
                        v-if="active"
                        color="white"
                        size="48"
                        v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                </v-scale-transition>
            </v-row>
        </v-card>
    </v-slide-item>
</template>

<script>
import { bus } from '../../main'
export default {
    props: ['project'],
    methods: {
        onClickedListItem(){
            bus.$emit("listItemSelected", this.project);
        }
    }
    
}
</script>

<style>
    .vaccine-grey-icon{
        background-image:url('../../assets/project-logos/icon-greyscale1.svg') !important;
    }

    .weather-grey-icon{
        background-image:url('../../assets/project-logos/icon-greyscale4.svg') !important;
    }

    .project-list-item{
        background-size:cover;
        background-repeat:no-repeat;
    }
</style>