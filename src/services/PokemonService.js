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
            sprites: {
              front_default: res[index].sprites.front_default,
              dream_world: res[index].sprites.other.dream_world.front_default
            }, 
            types: res[index].types,
            id: res[index].id
          })
        });

        let pokemonList = {page: pageNum, pokemons}
        localStorage.setItem(`page${pageNum}`, JSON.stringify(pokemonList))
        Store.dispatch('setPokemons',pokemonList )
      })   
  },

  async getSinglePokemon(id) {
    let response = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    
    return response.data
    }
 
}
