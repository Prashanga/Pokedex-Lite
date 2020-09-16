<template>
  <div id="q-app">
    <router-view />
  </div>
</template>


<script>
import PokemonService from './services/PokemonService'
const worker = new Worker('/WebWorker.js')


export default {
  name: 'App',

  beforeCreate() {
   PokemonService.getFirstPokemons()

   worker.addEventListener('message', function(e) {
      PokemonService.setExtraPokemons(e.data)
     
    }, false);
  },

  mounted(){
    setTimeout(() => {
      this.callWebWorker()
    }, 1000)
   
  },
  beforeDestroy(){
    worker.terminate()
  },
  methods: {
    callWebWorker(){
      worker.postMessage('Hello World');
    }
  }
}
</script>
