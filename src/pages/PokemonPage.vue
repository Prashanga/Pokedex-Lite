<template >
  <q-layout view="lHh Lpr lFf" :style="getColor">
    <NavbarPokemonPage />

    <q-page-container>
    <q-page>
      <div v-if="pokemon" class="row">

        <div class="col-sm-5 col-xs-12">
          <div class="row justify-center">
            <div class="col-12 text-center ">
              <img :src="getImageUrl(pokemon)" class="mainImage" />
            </div>

            <div class="highlight-box col-12">
              <p class="text-h3 text-center pokemon-name">
                {{ pokemon.name[0].toUpperCase() + pokemon.name.slice(1) }}
              </p>

              <div class="type-chips">
                <div v-for="type in types" :key="type" class="type-chip text-center">{{type}}</div>
              </div>

              <p class="height-weight">Height  <i>{{ height }}</i></p>
              <p class="height-weight">Weight  <i>{{ weight }}</i></p>
            
            </div>
          </div>
        </div>
      
        <div class="col-sm-7 col-xs-12 q-pt-lg">
          <div class="chart-container" style="position: relative; height:600px; width:600px">
            <canvas id="statsChart" ref="statsChart" ></canvas>
          </div>
        </div>
      </div>

    </q-page>
    </q-page-container>
  </q-layout>
</template>


<script>
/* eslint-disable vue/require-default-prop */
import NavbarPokemonPage from '../components/NavbarPokemonPage.vue'
import PokemonService from '../services/PokemonService'
import { mapState } from 'vuex'
import Chart from 'chart.js'

export default {
  name: 'PokemonPage',

  props: {
      id: Number,
      name: String
  },

  components: { NavbarPokemonPage },

  data() {
    return{
      pokemon: null,
      chartData: {
        labels: ['HP', 'Attack', 'Defence', 'Sp. Atk', 'Sp. Def', 'Speed'],
        datasets: [{
            label: 'Abilities',
            data: [78, 84, 209, 85, 100, 89],
            backgroundColor: 'rgba(57, 59, 68, 0.8)', // TODO: Make dynamic acc to type
            borderWidth: 3,
            pointRadius: 0.5
        }]
      },
    }
  },

  async created() {
    PokemonService
      .getSinglePokemon(this.id)
      .then(res => {
        this.pokemon = res
        document.title = res.name[0].toUpperCase() + res.name.slice(1) +' - Pokédex'
      })
      .catch( e => console.error(e.message))
  },

  mounted(){
    this.isPokemonLoaded()
    this.$nextTick(function () {
    
     setTimeout(() => {
    
      new Chart(this.$refs.statsChart, {
      type: 'radar',
      data: this.chartData,
     
      options: {
        scale: {
            angleLines: {
              lineWidth: 2,
              display: true
            },
            ticks: {
              min: 0,
              max: 260,
              stepSize: 52,
              fontColor: '#000'
            },
             pointLabels: {
              fontSize: 16,
              fontColor: '#000'
            }
          },
          legend: {
           display: false
          },
          tooltips:{
            enabled:false,
          },
          
        }
       });
       }, 1000)
    })
  },

  computed: {
    ...mapState({
        color: state => state.current.pokemonPageColor
    }),
    getColor() {
      return {
        '--color': this.color
      }
    },
    types(){
      return this.pokemon.types.map(type => 
          type.type.name[0].toUpperCase() + type.type.name.slice(1)
      )
    },
    height(){
      // Height is received in decimeters ¯\_(ツ)_/¯
      let heightInInches = this.pokemon.height * 3.937
      return Math.trunc(heightInInches / 12) + '\'' + ' ' + Math.floor(heightInInches % 12 ) + '"'
    }, 
    weight(){
      return this.pokemon.weight / 10 + ' kg'
    }

  },  

  methods: {
    getImageUrl(){
      return this.pokemon? this.pokemon.sprites.other.dream_world.front_default || 
        this.pokemon.sprites.front_default : 
        '/imagenotavailable.png'
    },
    isPokemonLoaded() {
      if(!this.pokemon) {
        this.$q.loading.show({
        message: 'Loading....'
        })
      }
      else{
         this.$q.loading.hide()
      }
    }
  },

  watch: {
    pokemon() {
      this.isPokemonLoaded()
    }
  }
}
</script>

<style lang="scss" scoped>
  $color: var(--color);

  .empty{
    height: 0px;
    background-color: black;
  }
  .mainImage {
    width: 260px;
    height: 260px;
    padding-top: 20px;
    margin-left:auto;
  }
  .highlight-box{
    background-color: $mainNav;
    margin-top: 15px;
    width: 300px;
    height: 200px;
    border-radius: 10% 1%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $cardWhite
  }
  .pokemon-name{
    font-style: italic;
  }
  .height-weight{
    font-size: 1rem;
    margin: 0 0 8px;

  }
  .type-chips{
    display: flex;
    flex-direction: row;
    margin-top: 0px;
    margin-bottom: 15px;
  }
  .type-chip {
    background: $cardWhite;
    color: $mainNav;
    border-radius: 8px;
    margin-left: 15px;
    font-size: 0.9rem;
    padding: 2px 8px;

  }
  #statsChart{
    height: 100px;
    width: 100px;
  }
</style>