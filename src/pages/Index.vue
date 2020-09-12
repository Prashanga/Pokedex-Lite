<template>
  <q-page class="flex flex-center">
     
    <div v-if="pokemons.length" class="q-pa-md row justify-center q-gutter-md">
      <div v-for="pokemon in pokemons" :key="pokemon.id">
        <q-card class="my-card">
         
          <img height="220px" width="205px" :alt="pokemon.name" :src="pokemon.sprites.other.dream_world.front_default" class="q-pt-xs">
         
          <q-card-section class="bottom-card-section ">
            <div class="text-h6 text-center">{{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}</div>
            <div class="text-center">by John Doe gdf dfgdf fgdfg fdgdfdsffg dfgdfg dfgdfgdfds sfgfgf dfgdfg dffgdfgf</div>
          </q-card-section>

                
        </q-card>
       
      </div>
    </div>

    <div v-else>


      <!-- *************    TODO: ADD LOADING SPINNER **************** -->

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
    height: 360px    
    max-width: 300px
  
  .bottom-card-section
    background-color: #f7f7f7
    height: 140px

</style>