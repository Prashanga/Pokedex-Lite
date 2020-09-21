<template>
  <q-header bordered class="text-white" :style='{ backgroundColor: color }'>
    <q-toolbar>
      <q-toolbar-title>
        <q-avatar size="60px" class="no-margin">
          <img src="/favicon.svg" >
        </q-avatar>
        Pokédex
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script>
import { mapState } from 'vuex'

export default {

  name: 'NavbarPokemonPage',
  props: ['pokemon'],
  computed: {
    ...mapState({
    color: state => state.navbar.pokemonPageColor
  }),
  },
}
</script>

