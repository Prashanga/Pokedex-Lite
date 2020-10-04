import { InfScrollSize } from '../../utils/constants'

export const state = {
  pokemonsLoaded: InfScrollSize,
  mainPageVisited: 0
}
  
export const mutations = {
  SET_POKEMONLOADED(state, value) {
    state.pokemonsLoaded = value
  },
  SET_MAINPAGEVISITED(state, value) {
    state.mainPageVisited = value
  }

}

export const actions = {
  setPokemonLoaded({ commit },value){
    commit('SET_POKEMONLOADED', value)
  },
  setMainPageVisited({ commit },value){
    commit('SET_MAINPAGEVISITED', value)
  }
}
