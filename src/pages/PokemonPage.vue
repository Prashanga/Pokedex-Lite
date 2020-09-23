<template>
  <q-layout view="lHh Lpr lFf" :style="getColor">
    <NavbarPokemonPage />

    <q-page-container>
    <q-page>
        <h3>This is pokemon's page {{name }}</h3>
         <h3>This is pokemon's page {{name }}</h3>
          <h3>This is pokemon's page {{name }}</h3>
           <h3>This is pokemon's page {{name }}</h3>
            <h3>This is pokemon's page {{name }}</h3>
             <h3>This is pokemon's page {{name }}</h3>
              <h3>This is pokemon's page {{name }}</h3>

        <p> </p>
        <p>The id is: {{id}} </p>
        <p> </p>
        <p>The id is: {{id}} </p>
        <p> </p>
        <p>The id is: {{id}} </p>
    </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
/* eslint-disable vue/require-default-prop */
import NavbarPokemonPage from '../components/NavbarPokemonPage.vue'
import PokemonService from '../services/PokemonService'
import { mapState } from 'vuex'

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
          this.pokemon = res
        })
        .catch( e => console.error(e.message))
    },
     computed: {
      ...mapState({
          color: state => state.current.pokemonPageColor
      }),
      getColor() {
        return {
          '--color': this.color
        }
      }
        
   },
}
</script>

<style lang="scss" scoped>
  // $color: var(--color);
 
  // .q-layout {
  //   background: -webkit-linear-gradient(to right,#f1f3f8, 25%, $color); 
  //   background: linear-gradient(to right,#f1f3f8, 25%, $color); 
  // }
</style>