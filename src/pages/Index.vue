<template>
  <q-page class="flex flex-center">
     
    <div v-if="pokemons.length" class="q-pa-md row justify-center q-gutter-md">
      <div v-for="pokemon in pokemons" :key="pokemon.id">
        <q-card class="my-card">
         
          <img height="220px" width="205px" :alt="pokemon.name" :src="pokemon.sprites.other.dream_world.front_default" class="q-pt-xs">
         
          <q-card-section class="bottom-card-section ">
            <div class="text-h6 text-center">{{`#${pokemon.id} ` + pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}</div>
            <!-- <div class="type-icons"> -->
              <span class="typeIcon" :style="{mask: `url(icons/${pokemon.types[0].type.name}.svg)`, display: 'inline-block', width: '40px', height: '40px', background: 'blue', maskSize: 'cover'}"></span>
               <!-- <object type="image/svg+xml" :data="bugIcon" class="icon">Dragon</object> -->
              <!-- <img height="30px" width="30px" src="../assets/type-icons/dragon.svg" alt="dark"> -->
            <!-- </div> -->
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
import bugIcon from '../assets/type-icons/bug.svg'
import darkIcon from '../assets/type-icons/dark.svg'
import grassIcon from '../assets/type-icons/grass.svg'

export default {
  name: 'PageIndex',
    data(){
    return {
      darkIcon: null, bugIcon: null
    }
  },
  created() {
  this.darkIcon = darkIcon, this.bugIcon = bugIcon
    
  },
  methods:{
    image(id){
      console.log(id)
      if(id) return this.pokemons[id-1].sprites.other.dream_world.front_default
    },
    typeIconCSS(pokemon){
      return {
        mask: `../assets/type-icons/${pokemon.types[0].type.name}Icon.svg`
        }
      
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

  .typeIcon {
    /* mask: var(--maskURL); */
    display: inline-block;
    width: 40px;
    height: 40px;
    background: blue;
    mask-size: cover;
  }
</style>