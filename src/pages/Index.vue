<template>
  <q-page class="flex flex-center">
     
    <div v-if="pokemons.length" class="q-pa-md row justify-center q-gutter-md">
      <div v-for="pokemon in pokemons" :key="pokemon.id">
        <q-card class="my-card">
         
          <img height="220px" width="205px" :alt="pokemon.name" :src="pokemon.sprites.other.dream_world.front_default" class="q-pt-xs">
         
          <q-card-section class="bottom-card-section ">
            <div class="text-h6 text-center">{{`#${pokemon.id} ` + pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}</div>
            <div class="row justify-center">
              <span v-for="type in pokemon.types" :key="type.type.name" class="q-ma-sm" :style="{maskImage: `url(icons/${type.type.name}.svg)`, display: 'inline-block', width: '40px !important', height: '40px !important', background: getTypeIconColor(type.type.name), maskSize: 'cover'}"></span>
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
    height: 360px;    
    width: 300px;
  }

  .bottom-card-section{
    background-color: #f7f7f7;
    height: 140px;
  }

</style>