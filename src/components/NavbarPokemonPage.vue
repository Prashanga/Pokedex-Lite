<template>
  <q-header bordered class="text-white" >  <!-- :style='{ backgroundColor: color,  }'> -->
    <q-toolbar>
      <q-toolbar-title>
        <a @click="$router.go(-1)">
          <q-avatar size="60px" class="no-margin">
            <img src="/favicon.svg" >
          </q-avatar>
        </a>
        Pokédex
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script>
import { mapState } from 'vuex'

export default {

  name: 'NavbarPokemonPage',
  computed: {
    ...mapState({
    color: state => state.navbar.pokemonPageColor
  }),
  },
}
</script>

<style scoped>
  .q-header {
    background: transparent;
  }
</style>