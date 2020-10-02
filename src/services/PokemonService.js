import axios from 'axios'

export default {

  async getSinglePokemon(id) {
    const response = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return response.data
    }
 
}
