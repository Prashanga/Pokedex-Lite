<template>
  <q-page class="flex flex-center">
 
    <div v-if="pokemons.length">
      <div v-for="pokemon in pokemons" :key="pokemon.id">
        <img height="60px" width="60px" :alt="pokemon.name" :src="pokemon.sprites.other.dream_world.front_default" >
      </div>
    </div>

    <div v-else>
      <p>Loading............</p>
    </div>
  </q-page>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PageIndex',
    data(){
    return {

    }
  },
  methods:{
    image(id){
      console.log(id)
      if(id) return this.pokemons[id-1].sprites.other.dream_world.front_default
      
    }
  },
  computed: {
    ...mapState({
      pokemons: state => state.pokemon.pokemons
    }),
    // sprites(){
    //   if()
    // }
  }
}
</script>
