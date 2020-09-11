<template>
  <q-page class="flex flex-center">
     
    <div v-if="pokemons.length" class="q-pa-md row justify-center q-gutter-md">
      <div v-for="pokemon in pokemons" :key="pokemon.id">
        <q-card class="my-card">
          <q-card-section >
            <img height="220px" width="225px" :alt="pokemon.name" :src="pokemon.sprites.other.dream_world.front_default" class="q-pt-md">
          </q-card-section>
          <q-card-section class=" ">
            <div class="text-h6 text-center">{{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}</div>
            <div class="text-center">by John Doe gdf dfgdf fgdfg fdgdfdsffg dfgdfg dfgdfgdfds sfgfgf dfgdfg dffgdfgf</div>
          </q-card-section>

                
        </q-card>
       
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
 
  }
}
</script>


<style lang="sass" scoped>
  .my-card
    height: 400px    
    max-width: 260px
</style>