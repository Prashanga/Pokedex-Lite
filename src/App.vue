<template>
  <div id="q-app">
    <router-view />
  </div>
</template>


<script>
export default {
  name: 'App',
  beforeMount: function() {
   this.$store.dispatch('getPokemons')
  },
  // beforeMount: function(){
  //   this.$store.dispatch('setPokemon') 
    
  // }
}
</script>
