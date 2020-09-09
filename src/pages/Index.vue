<template>
  <q-page class="flex flex-center">
     
    <div v-if="pokemons.length" class="q-pa-md row items-center q-gutter-md">
      <div v-for="pokemon in pokemons" :key="pokemon.id">
        <q-card class="my-card">
          <img height="250px" width="250px" :alt="pokemon.name" :src="pokemon.sprites.other.dream_world.front_default" >
 
          <q-card-section>
            <div class="text-h6">{{ pokemon.name }}</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ pokemon.name }}
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
    // sprites(){
    //   if()
    // }
  }
}
</script>


<style lang="sass" scoped>
  .my-card
    width: 400px
    height: 400px    
    max-width: 250px
</style>