import axios from 'axios'
import { Store } from '../store/index'

let pokemons = null

export default {
  getAllPokemons() {
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
          .then( response => {
            pokemons = response.data.results
            // Store.dispatch('getPokemons', pokemons)
          })
          .then(()=> {
              if(pokemons.length){
                pokemons.forEach((pokemon, index) => {
                  axios.get(pokemon.url)
                        .then( response=> {
                          // console.log(response.data)
                          // Store.dispatch('setPokemon', response.data)
                          pokemons[index]={ ...pokemons[index], ...response.data}
                          
                        })
                }
                )
                console.log(pokemons)
              }
          })
          .catch(err => console.error(err))
    
  },

}
