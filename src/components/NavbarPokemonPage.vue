<template>
  <q-header bordered class="text-white " >
    <q-toolbar >
      <q-toolbar-title >

        <a @click="mainPageVisited === 0 ? $router.push('/') : $router.go(-1)">
          <q-icon name="fas fa-times" class="backIcon" />
        </a>

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
      mainPageVisited: state => state.current.mainPageVisited,
    }),
  }
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
    font-size: 2rem;
  }
  .backIcon{
    color: black;
    cursor: pointer;
    font-size: 1.3rem;
    vertical-align: baseline;
  }
  .backIcon:hover {
    background-color: black;
    color: white;
  }
  .q-toolbar{
    height: 75px;
  }

</style>