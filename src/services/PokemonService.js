import axios from 'axios'
import { Store } from '../store/index'

export default {
  async getFirstPokemons() {
    
    let response = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
    let tempPokemons = response.data.results

    Promise.all(tempPokemons.map(async pokemon => {
      let res = await axios.get(pokemon.url)
      return res.data
    }
      ))
      .then( res => {
        tempPokemons.forEach((pokemon, index) => {
          tempPokemons[index] = { ...tempPokemons[index], ...res[index]}
        });
        Store.dispatch('setPokemons', tempPokemons)
      })
    
  },
  async setExtraPokemons(pokemons) {
    Store.dispatch('setExtraPokemons', pokemons)
  
  }

  //   let response = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=80')
  //   let tempPokemons = response.data.results

  //   Promise.all(tempPokemons.map(async pokemon => {
  //       let res = await axios.get(pokemon.url)
  //       return res.data
  //     }
  //     ))
  //     .then( res => {
  //       tempPokemons.forEach((pokemon, index) => {
  //         tempPokemons[index] = { ...tempPokemons[index], ...res[index]}
  //       });
  //       Store.dispatch('setExtraPokemons', tempPokemons)
  //     })
    
  // },

}
