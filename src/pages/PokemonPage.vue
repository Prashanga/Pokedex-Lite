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
              <div class="highlight-box col-12 q-pt-lg">
                <p class="text-h4 text-center pokemon-name">
                  {{ pokemon.name[0].toUpperCase() + pokemon.name.slice(1) }}
                </p>
                <p class="height-weight">
                  Height: 22'9" Weight: 190kg
                </p>
              </div>
            </div>
          </div>
          <!-- <div class="empty col-5"></div> -->
          <div class="col-sm-7 col-xs-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ab cumque, inventore maiores eligendi placeat incidunt a distinctio reiciendis? Facere ipsum officiis quis nulla aut rerum ipsam sunt distinctio quasi.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi assumenda, reiciendis tenetur ab necessitatibus odit dolorum! Eius eos excepturi cumque, aliquam incidunt, accusantium est ipsa dolorem architecto officiis laudantium rerum.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, ratione molestias cupiditate consectetur quibusdam perspiciatis beatae eos, blanditiis saepe numquam iure magni, reiciendis culpa pariatur perferendis modi repudiandae? Placeat, dolor.
          
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

export default {
  name: 'PokemonPage',

  props: {
      id: Number,
      name: String
  },

  components: { NavbarPokemonPage },

  data() {
    return{
      pokemon: null
    }
  },

  async created() {
    PokemonService
      .getSinglePokemon(this.id)
      .then(res => {
        this.pokemon = res
      })
      .catch( e => console.error(e.message))
  },

  mounted(){
    this.isPokemonLoaded()
  },

  computed: {
    ...mapState({
        color: state => state.current.pokemonPageColor
    }),
    getColor() {
      return {
        '--color': this.color
      }
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

  .fixedColumn {
    position: fixed;
    height: 100vh;    
  }
  .scrollableColumn {
    height: 190vh;
  }
  .empty{
    height: 0px;
    background-color: black;
  }
  .mainImage {
    width: 260px;
    height: 260px;
    padding-top: 50px;
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
    // color:$color;
  }
  .height-weight{
    font-size: 1rem
    
  }
</style>