import axios from 'axios'
import { Store } from '../store/index'

let pokemons = null

export default {
  getAllPokemons() {
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000')
          .then( response => {
            pokemons = response.data.results
            Store.dispatch('getPokemons', pokemons)
          })
          .then(()=> {
              if(pokemons.length){
                pokemons.forEach((pokemon, index) => {
                  axios.get(pokemon.url)
                        .then( response=> {
                          console.log("Pokemon get result:  ", response)
                        })
                })
              }
          })
          .catch(err => console.error(err))
    
  },

}
