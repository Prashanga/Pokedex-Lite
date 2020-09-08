<template>
  <div id="q-app">
    <router-view />
  </div>
</template>


<script>
import PokemonService from './services/PokemonService'

export default {
  name: 'App',
  beforeMount: function() {
   PokemonService.getAllPokemons()
  },

}
</script>
