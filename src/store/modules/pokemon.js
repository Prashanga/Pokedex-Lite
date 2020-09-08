import PokemonService from '../../services/PokemonService'
export const state = {
  test:"test",
  pokemons: []
}

export const mutations = {

  GET_POKEMONS(state, pokemons) {
    state.pokemons = pokemons
    // console.log(pokemons)
  },
  SET_POKEMON(state, pokemon) {
    // state.pokemons = pokemons
    console.log(pokemon)
  },

}
export const actions = {

 getPokemons({ commit }) {
    return PokemonService.getAllPokemons().then(response => {
      commit('GET_POKEMONS', response.data.results)
    })
  },
  setPokemon({ commit, state }) {
    if(state.pokemons.length){
      console.log(state.pokemons)
      state.pokemons.forEach((pokemon,index) => {
        console.log(1)
      })
    }
    else console.log("no pokemonss")
    // return PokemonService.getIndividualPokemon().then(response => {
      //commit('SET_POKEMON', response.data.results)
    // })
  }
}
