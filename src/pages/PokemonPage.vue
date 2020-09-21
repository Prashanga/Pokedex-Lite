<template>
  <q-layout view="lHh Lpr lFf">
    <NavbarPokemonPage />

    <q-page-container>
    <q-page>
        <h3>This is pokemon's page {{name }}</h3>
        <p> </p>
        <p>The id is: {{id}} </p>
    </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import NavbarPokemonPage from '../components/NavbarPokemonPage.vue'

export default {
    name: 'PokemonPage',
    props: {
        id: Number,
        name: String
    },
    components: { NavbarPokemonPage },
    computed: {
 
    }
}
</script>

<style scoped>

</style>