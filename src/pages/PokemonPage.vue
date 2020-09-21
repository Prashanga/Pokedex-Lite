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
import PokemonService from '../services/PokemonService'


export default {
    name: 'PokemonPage',
    props: {
        id: Number,
        name: String
    },
    components: { NavbarPokemonPage },
    data() {
      return{
        pokemon: null
      }
    },
    created() {
      PokemonService
        .getSinglePokemon(this.id)
        .then(res => {
          console.log(res)
          this.pokemon = res
        })
        .catch( e => console.error(e.message))

    },
 
}
</script>
