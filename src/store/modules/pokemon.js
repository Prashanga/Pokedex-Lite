// import PokemonService from '../../services/PokemonService'
export const state = {
  pokemons: []
}

export const mutations = {

  GET_POKEMONS(state, pokemons) {
    state.pokemons = pokemons 
  },
  SET_POKEMONS(state, pokemon){
    //Add other details of individual pokemons
  }

}


export const actions = {

 getPokemons({commit}, pokemons) { 
  commit('GET_POKEMONS', pokemons)
 }
}
