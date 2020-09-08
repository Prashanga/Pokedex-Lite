import PokemonService from '../../services/PokemonService'
export const state = {
  pokemons: []
}

export const mutations = {

  GET_POKEMONS(state, pokemons) {
    // state.pokemons = pokemons
    console.log(pokemons)
  },

}
export const actions = {

 getPokemons({ commit }) {
    return PokemonService.getAllPokemons().then(response => {
      commit('GET_POKEMONS', response.data.results)
    })
  }
}
