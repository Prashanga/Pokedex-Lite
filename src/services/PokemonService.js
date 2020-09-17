import axios from 'axios'
import { Store } from '../store/index'

export default {
  async getPokemonList(pageNum) {
    if(localStorage.getItem(`page${pageNum}`)) {
      return  Store.dispatch('setPokemons', JSON.parse(localStorage.getItem(`page${pageNum}`)) )
    }
    const limit = 50
    const offset = (pageNum - 1) * limit

    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
    let tempPokemons = response.data.results
    let pokemons = []
    // let pokemonList = {page: pageNum, pokemons: tempPokemons}
    // console.log(JSON.stringify(tempPokemons))
    // localStorage.setItem(`page${pageNum}`, JSON.stringify(tempPokemons))
    // Store.dispatch('setPokemons',pokemonList )

    Promise.all(tempPokemons.map(async pokemon => {
      let res = await axios.get(pokemon.url)
      return res.data
    }
      ))
      .then( res => {
        tempPokemons.forEach((pokemon, index) => {
          let { name, url } = pokemon

          pokemons.push({ 
            name,
            url,
            sprites: res[index].sprites, 
            types: res[index].types,
            id: res[index].id
          })
        });

        let pokemonList = {page: pageNum, pokemons}
        console.log(JSON.stringify(pokemons))
        localStorage.setItem(`page${pageNum}`, JSON.stringify(pokemonList))
        Store.dispatch('setPokemons',pokemonList )
      })
    
    
  },
  // async setExtraPokemons(pokemons) {
  //   Store.dispatch('setExtraPokemons', pokemons)
  
  // }

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
