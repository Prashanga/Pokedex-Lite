<template>
  <q-header bordered class="text-white " >
    <q-toolbar >
      
      <q-toolbar-title >
        <a @click="$router.go(-1)" class="no-margin no-padding">
          <q-icon name="fas fa-times" class="backIcon no-margin no-padding" /> 
       
        </a>
        <!-- <span class="spacer" ></span > -->
        <span class="pokemonNameTitle q-ml-xl">{{ name[0].toUpperCase() + name.slice(1) }}</span>
      
      </q-toolbar-title>
      
    </q-toolbar>
  </q-header>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {

  name: 'NavbarPokemonPage',
  computed: {
    ...mapState({
    color: state => state.current.pokemonPageColor
    }),
    ...mapGetters([
      'name'
    ])
  },
}
</script>

<style lang="scss" scoped>

  $color: var(--color);
 
  .q-header {
    background: -webkit-linear-gradient(to right,#f1f3f8, 25%, $color); 
    background: linear-gradient(to right,#f1f3f8, 25%, $color); 
  }

  .pokemonNameTitle{
    color: $mainNav;
    font-size: 1.8rem;
  }

  .backIcon{
    color: black;
    cursor: pointer;
    font-size: 1.5rem;
    vertical-align: baseline !important;
  }
  .backIcon:hover {
    background-color: black;
    color: white;
  }


</style>