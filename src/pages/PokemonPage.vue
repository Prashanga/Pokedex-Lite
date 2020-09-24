<template>
  <q-layout view="lHh Lpr lFf" :style="getColor">
    <NavbarPokemonPage />

    <q-page-container>
    <q-page>
      <div class="row">

          <div class="fixedColumn col-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem similique quos, fugit error dolor voluptatum veritatis ullam nam sint eveniet quaerat eius, maxime praesentium libero omnis nisi eligendi aperiam delectus.
          </div>
          <div class="empty col-5"></div>
          <div class="scrollableColumn col-7">
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
    created() {
      PokemonService
        .getSinglePokemon(this.id)
        .then(res => {
          this.pokemon = res
        })
        .catch( e => console.error(e.message))
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
}
</script>

<style lang="scss" scoped>
  .fixedColumn {
    position: fixed;
    background-color: pink;
    height: 100vh;    
  }
  .scrollableColumn {
    background-color:gray;
    height: 190vh;
  }
  .empty{
    height: 1px;
    background-color: black;
  }
</style>