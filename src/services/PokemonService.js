import axios from 'axios'

// const baseUrl = 'https://pokeapi.co/api/v2'

// const apiClient = axios.create({
//   baseUrl,
//   withCredentials: false,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   }
// })

export default {
  getAllPokemons() {
    return axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000')
  },
  getIndividualPokemon(id){
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  }
}
