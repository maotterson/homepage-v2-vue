<template>
    <v-card
        tile
        flat
        outlined
    >
        {{project.name}}
    </v-card>
</template>

<script>
export default {
    props: ['project'],
}
</script>

<style>

</style>