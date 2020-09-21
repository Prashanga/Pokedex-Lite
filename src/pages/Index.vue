<template>
  <q-page class="flex flex-center">
     
    <div v-if="pokemons && !errors" class="q-pa-md row justify-center q-gutter-md">
      <div v-for="pokemon in pokemons" :key="pokemon.id" class="card-full">
        <router-link :to="{name: 'PokemonPage', params: { id: pokemon.id, name: pokemon.name}}" data="pokemon">
     
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
        </router-link>
 
      </div>

      <div class="col-12 q-ma-lg flex flex-center">
        <q-pagination
          @input = "changePageNumber()"
          v-model="pageChange"
          color="purple"
          :max="1050/50"
          :max-pages="6"
          :direction-links="true"
          size="22px"
        >
        </q-pagination>
      </div>
    </div>

    <div v-if="errors">
      <!-- *************    TODO: ADD LOADING SPINNER **************** -->
      <p>Errors.......</p>
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
    pageNumber: 1,
    pageChange: 1,
    errors: false
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
      return pokemon.sprites.dream_world || 
              pokemon.sprites.front_default || 
              '/imagenotavailable.png'
         },
    showErrorNotif(message) {
      this.$q.notify({
              message,
              color: 'deep-orange-9',
              avatar: '/abra-256x256.png',
              badgeColor: 'transparent',
              badgeTextColor: 'transparent',
               badgeClass: 'shadow-0',
              actions: [
                { label: 'Reload', color: 'white', handler: () => { location.reload() } }
              ]
            })
    },
    changePageNumber(){
      this.$q.loading.show({
        message: 'Loading....'
        })
      PokemonService
        .getPokemonList(this.pageChange)
        .then(() => {
          setTimeout(() => {
            this.$q.loading.hide()
          }, 2000)
          
          this.pageNumber = this.pageChange //Update page number when the component is loaded successfully
        })
        .catch((error) => {
          this.$q.loading.hide()
          this.showErrorNotif(error.message)
          this.pageChange = this.pageNumber // Don't change the page number on errors
        })
    }
  },
  computed: {
    ...mapState({
      pokemons: state => state.pokemon.pokemons.pokemons
    }),
  },
  watch: {
    pageChange(){
      this.changePageNumber()
    },

  }
}
</script>


<style >
  .my-card{
    width: 180px;
    height: 200px;
    z-index: 2;
  }
   .card-image {
    height: 110px;
    max-width:150px;
  }
  .bottom-card-section{
    background-color: inherit;
  }
  .pokemon-id{
    position: absolute;
    left:8px; 
    bottom: 5px; 
    font-weight: bold;
    font-size: 0.9rem;
  }
  .my-card:hover {
    background-color: red;
    cursor:pointer;
    z-index:1;
  }

  a { 
     text-decoration: none;
     color: inherit;}
</style>