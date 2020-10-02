<template>
<div>
 <q-layout view="hHh lpR fFf">
   <Navbar />
  <q-page-container>

  <q-page class="flex flex-center">
   <q-infinite-scroll v-show="searchInput.length < 1" @load="onLoad" class="q-mb-xl">
    <div class="row justify-center q-gutter-xs q-mt-xs">
      <div v-for="pokemon in pokemons" :key="pokemon.id">
        <router-link 
          :to="{name: 'PokemonPage', 
          params: { id: pokemon.id, name: pokemon.name}}" 
          @click.native = "setPokemon(pokemon)"  
        >
     
        <q-card class="my-card">
          <img :alt="pokemon.name" :src="getImageUrl(pokemon)" class="q-pt-xs q-pb-none q-mb-none card-image">
         
          <q-card-section class="bottom-card-section q-pt-sm">
            <div class="pokemon-id">
              {{`${pokemon.id}`}}
            </div>
            <div class="pokemon-name-text text-center">
              {{ pokemonCardName(pokemon.name) }}
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
    </div>
    
    <template v-slot:loading>
      <div class="row justify-center q-my-md">
        <q-spinner-dots color="black" size="40px" />
      </div>
    </template>
   </q-infinite-scroll>

      <!--        Div for Search pokemons      -->

    <div v-if="searchInput.length >= 1" class="row justify-center q-gutter-xs q-mt-xs">
      <div v-for="pokemon in searchPokemons" :key="pokemon.id">
        <router-link 
          :to="{name: 'PokemonPage', 
          params: { id: pokemon.id, name: pokemon.name}}" 
          @click.native = "setPokemon(pokemon)"  
        >
     
        <q-card class="my-card">
          <img 
            :alt="pokemon.name" 
            :src="getImageUrl(pokemon)" 
            class="q-pt-xs q-pb-none q-mb-none card-image"
          >
         
          <q-card-section class="bottom-card-section q-pt-sm">
            <div class="pokemon-id">
              {{`${pokemon.id}`}}
            </div>
            <div class="pokemon-name-text text-center">
              {{ pokemonCardName(pokemon.name) }}
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
    </div>
    
    <q-input 
      label-color="grey-1" 
      dark 
      filled 
      class="search" 
      v-model="searchInput" 
      label="Search" 
    >
      <template v-if="searchInput.length" v-slot:append>
        <q-icon name="close" @click="searchInput = ''" class="cursor-pointer" />
      </template>
      <template v-else v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>

    <q-inner-loading :showing="pageFirstLoadSpinner" class="initialLoader">
      <q-spinner-ball size="58px" color="black" />
    </q-inner-loading>
  </q-page>
  </q-page-container>
  </q-layout>
</div>
</template>

<script>

import { Type_Icon_Colors } from '../utils/constants'
import allPokemons from '../utils/allPokemons.js'
import Navbar from 'components/Navbar.vue'

export default {
  name: 'PageIndex',
  components: { Navbar },
  data(){
    return {
     pageFirstLoadSpinner: false,
     errors: false,
     searchInput: '',
     allPokemons: Object.freeze(allPokemons),
     pokemons: null,
     searchPokemons: null,
     infScrollSize: 50
    }
  },

  created() {
    this.pokemons = this.allPokemons.slice(0,50)
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
    setPokemon(pokemon){
      let color =  this.getTypeIconColor(pokemon.types[0].type.name)
      this.$nextTick(() => {
        this.$store.dispatch('setColor',color)
        this.$store.dispatch('setPokemon', pokemon)
      })
    },
    pokemonCardName(name){
      const names = ['ho-oh']
      if(names.includes(name.toLowerCase()) ) {
        return name.charAt(0).toUpperCase() + name.slice(1)
      }
      else {
        return name.charAt(0).toUpperCase() + name.slice(1).split('-')[0]
      }
    },
    showErrorNotif(message) {
      this.$q.notify({
        message,
        color: 'deep-orange-9',
        icon: 'warning',
        badgeColor: 'transparent',
        badgeTextColor: 'transparent',
        badgeClass: 'shadow-0',
        timeout: 1000
      })
    },
    onLoad (index, done) {
      // Infinite Scroll Loading 
      if(this.pokemons.length <= (800 - this.infScrollSize)){
        setTimeout(() =>{
          let additionalPokemons = this.allPokemons.slice(
            this.pokemons.length,this.pokemons.length + this.infScrollSize 
          )
          this.pokemons = [...this.pokemons, ...additionalPokemons]
          done()
        }, 800)  
      }
      else{
        done()
      }     
    }
  },

  watch: {
    searchInput(){
      if(this.searchInput.length > 0){
        let foundPokemons = allPokemons.filter(pokemon => 
          pokemon.name.includes(this.searchInput.toLowerCase())
        )
        this.searchPokemons = foundPokemons
        if(foundPokemons.length === 0) this.showErrorNotif('No match found')
      }
      else{
        this.searchPokemons = null
      }
    },
  }
}
</script>


<style lang="scss" scoped>
  main {
    background-color: $primaryBlue;
  }
  .my-card {
    background-color: $cardWhite; 
    width: 160px;
    height: 180px;
  }
  .card-image {
    height: 110px;
  }
  .bottom-card-section {
    background-color: inherit;
    height: 70px;
  }
  .pokemon-id {
    position: absolute;
    left:8px; 
    bottom: 5px; 
    font-weight: bold;
    font-size: 0.8rem;
  }
  .my-card:hover {
    background-color: $secondaryBlue;
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
  .pokemon-name-text  {
    font-size: 0.9rem;
    margin-top: 5px;
  }
  .type-icons {
    width: 20px;
    height: 20px;
  }
  .search {
    position: fixed;
    right: 0;
    bottom: 0;
    background-color: $mainNav;
    text-decoration: none;
    height: 55px;
  }
  .search:focus {
    background-color: $mainNav;
  }
  .pagination {
    margin-bottom: 75px;
  }
  .q-field__control{
    color: $mainNav !important;
  }
  
  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 1024px)
  {
    .my-card {
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
    .pokemon-id {
      position: absolute;
      left:2px; 
      bottom: 2px; 
      font-weight: bold;
      font-size: 0.6rem;
    }
    .pokemon-name-text {
      font-size: 0.8rem;
      margin-top: 2px;
    }
   .type-icons {
      width: 15px;
      height: 15px;
    }
    .search {
      width: 100vw;
    }
  }
</style>