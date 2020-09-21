<template>
    <q-page>
        <h3>This is pokemon's page {{name }}</h3>
        <p> </p>
        <p>The id is: {{id}} </p>

    </q-page>
</template>

<script>
export default {
    name: 'PokemonPage',
    props: {
        id: Number,
        name: String
    },
    computed: {
 
    }
}
</script>

<style scoped>

</style>