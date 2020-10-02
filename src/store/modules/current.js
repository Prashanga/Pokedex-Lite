import { InfScrollSize } from '../../utils/constants'

export const state = {
  pokemonPageColor: null,
  pokemon: null,
  pokemonsLoaded: InfScrollSize
}
  
export const mutations = {
  SET_COLOR(state, color){ 
    state.pokemonPageColor = color
  },
  SET_POKEMON(state, pokemon){ 
    state.pokemon = pokemon
  },
  SET_POKEMONLOADED(state, value) {
    state.pokemonsLoaded = value
  }
}

export const actions = {
  setColor({commit}, color){
    commit('SET_COLOR', color)
  },
  setPokemon({commit}, pokemon){
  commit('SET_POKEMON', pokemon)
  },
  setPokemonLoaded({ commit },value){
    commit('SET_POKEMONLOADED', value)
  }
}

export const getters = {
  name: state => {
    return state.pokemon.name
  }
}