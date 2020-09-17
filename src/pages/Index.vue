<template>
  <q-page class="flex flex-center">
     
    <div v-if="pokemons.length" class="q-pa-md row justify-center q-gutter-md">
      <div v-for="pokemon in pokemons" :key="pokemon.id">
        <q-card class="my-card">
         
          <img :alt="pokemon.name" :src="pokemon.sprites.other.dream_world.front_default" class="q-pt-xs card-image">
         
          <q-card-section class="bottom-card-section">
            <div class="pokemon-id">
              {{`${pokemon.id}`}}
            </div>
            <div class="text-subtitle-1 text-center q-mt-sm">
              {{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}
            </div>
            <div class="row justify-center">
              <span 
                v-for="type in pokemon.types" 
                :key="type.type.name" 
                class="q-ma-sm" 
                :style="{maskImage: `url(icons/${type.type.name}.svg)`, display: 'inline-block', width: '28px', height: '28px', background: getTypeIconColor(type.type.name), maskSize: 'cover'}" 
                :title="type.type.name">
                
              </span>
            </div>
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
import { Type_Icon_Colors } from '../constants'
import PokemonService from '../services/PokemonService'

export default {
  name: 'PageIndex',
    data(){
    return {
    }
  },
  beforeCreate() {
  PokemonService.getPokemonList(3)
  },
  methods:{
    image(id){
      console.log(id)
      if(id) return this.pokemons[id-1].sprites.other.dream_world.front_default
    },
    getTypeIconColor(type){
      return Type_Icon_Colors[type]
    }
  },
  computed: {
    ...mapState({
      pokemons: state => state.pokemon.pokemons
    }),
  }
}
</script>


<style >
  .my-card{
    width: 200px;
  }
   .card-image {
    height: 150px;
  }
  .bottom-card-section{
    background-color: #ffffff;
  }
  .pokemon-id{
    position: absolute;
    left:8px; 
    bottom: 5px; 
    font-weight: bold;
  }
</style>