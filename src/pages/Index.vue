<template>
  <q-page class="flex flex-center">
     
    <div v-if="pokemons" class="q-pa-md row justify-center q-gutter-md">
      <div v-for="pokemon in pokemons" :key="pokemon.id">
        <q-card class="my-card">
         
          <img :alt="pokemon.name" :src="getImageUrl(pokemon)" class="q-pt-xs card-image">
         
          <q-card-section class="bottom-card-section">
            <div class="pokemon-id">
              {{`${pokemon.id}`}}
            </div>
            <div class="text-body-1 text-center">
              {{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}
            </div>
            <div class="row justify-center">
              <span 
                v-for="type in pokemon.types" 
                :key="type.type.name" 
                class="q-ma-sm" 
                :style="{maskImage: `url(icons/${type.type.name}.svg)`, display: 'inline-block', width: '20px', height: '20px', background: getTypeIconColor(type.type.name), maskSize: 'cover'}" 
                :title="type.type.name">
                
              </span>
            </div>
          </q-card-section>

        </q-card>
 
      </div>

      <div class="col-12 q-ma-lg flex flex-center">
        <q-pagination
          v-model="pageNumber"
          color="purple"
          :max="1050/50"
          :max-pages="6"
          :boundary-numbers="true"
        >
        </q-pagination>
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
      pageNumber: 1
    }
  },
  beforeCreate() {
  PokemonService.getPokemonList(1)
  },
  methods:{
    getTypeIconColor(type){
      return Type_Icon_Colors[type]
    },
    getImageUrl(pokemon){
      return pokemon.sprites.other.dream_world.front_default || pokemon.sprites.front_default || '/imagenotavailable.png'
    }
  },
  computed: {
    ...mapState({
      pokemons: state => state.pokemon.pokemons.pokemons
    }),
  },
  watch: {
    pageNumber() {
      PokemonService.getPokemonList(this.pageNumber)
    }
  }
}
</script>


<style >
  .my-card{
    width: 180px;
    height: 200px;
  }
   .card-image {
    height: 110px;
    max-width:150px;
  }
  .bottom-card-section{
    background-color: #ffffff;
  }
  .pokemon-id{
    position: absolute;
    left:8px; 
    bottom: 5px; 
    font-weight: bold;
    font-size: 0.9rem;
  }
</style>