<template>

  <q-page class="flex flex-center">
     
    <div v-if="pokemons && !errors" class="row justify-center q-gutter-xs q-mt-xs">
      <div v-for="pokemon in pokemons" :key="pokemon.id">
        <router-link 
          :to="{name: 'PokemonPage', 
          params: { id: pokemon.id, name: pokemon.name}}" 
          @click.native = "setNavColor(pokemon)"  
        >
     
        <q-card class="my-card">
          <img :alt="pokemon.name" :src="getImageUrl(pokemon)" class="q-pt-xs q-pb-none q-mb-none card-image">
         
          <q-card-section class="bottom-card-section q-pt-sm">
            <div class="pokemon-id">
              {{`${pokemon.id}`}}
            </div>
            <div class="pokemon-name-text text-center">
              {{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}
            </div>
            <div class="row justify-center">
              <span 
                v-for="type in pokemon.types" 
                :key="type.type.name" 
                class="q-mx-xs type-icons" 
                :style="{maskImage: `url(icons/${type.type.name}.svg)`, display: 'inline-block',  background: getTypeIconColor(type.type.name), maskSize: 'cover'}" 
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
          :max="800/50"
          :max-pages="5"
          :direction-links="true"
          size="18px"
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
import errorImage from '../assets/abra-256x256.png'

export default {
  name: 'PageIndex',

  data(){
  return {
    pageNumber: 1,
    pageChange: 1,
    errors: false,
    errorImage: null
  }
},
  beforeCreate() {
  PokemonService.getPokemonList(1)
  this.errorImage = errorImage
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
    async setNavColor(pokemon){
      let color = await this.getTypeIconColor(pokemon.types[0].type.name)
      this.$nextTick(() => 
      this.$store.dispatch('setColor',color))

    },
    showErrorNotif(message) {
      this.$q.notify({
              message,
              color: 'deep-orange-9',
              avatar: errorImage,
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


<style scoped>
  main {
    background-color: #d6e0f0;
  }
  .my-card{
    background-color:#f1f3f8; 
    width: 160px;
    height: 180px;
  }
  .card-image {
    height: 110px;
  }
  .bottom-card-section{
    background-color: inherit;
    height: 70px;
  }
  .pokemon-id{
    position: absolute;
    left:8px; 
    bottom: 5px; 
    font-weight: bold;
    font-size: 0.8rem;
  }
  .my-card:hover {
    background-color: rgb(165, 168, 182);
    cursor:pointer;
    z-index:1;
    transform: rotate(1deg);
    -webkit-transform: rotate(1deg);
    -moz-transform: rotate(1deg);
    -o-transform: rotate(1deg);
  }

  a { 
    text-decoration: none;
    color: inherit;
  }

  .pokemon-name-text{
    font-size: 0.9rem;
     margin-top: 5px;
  }
  .type-icons {
    width: 20px;
    height: 20px;
  }

  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 1024px)
  {
    .my-card{
      width: 100px;
      height: 140px;
    }
    .card-image {
      max-height: 90px;
    }
     .bottom-card-section{
      background-color: inherit;
      height: 50px;
    }
    .pokemon-id{
      position: absolute;
      left:2px; 
      bottom: 2px; 
      font-weight: bold;
      font-size: 0.6rem;
  }
    .pokemon-name-text{
      font-size: 0.8rem;
      margin-top: 2px;
    }
   .type-icons {
    width: 15px;
    height: 15px;
  }

}
</style>