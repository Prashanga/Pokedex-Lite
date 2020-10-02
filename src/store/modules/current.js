export const state = {
    pokemonPageColor: null,
    pokemon: null
}
  
export const mutations = {
  SET_COLOR(state, color){ 
    state.pokemonPageColor = color
  },
  SET_POKEMON(state, pokemon){ 
    state.pokemon = pokemon
  }
}
  
export const actions = {
  setColor({commit}, color){
    commit('SET_COLOR', color)
  },
  setPokemon({commit}, pokemon){
  commit('SET_POKEMON', pokemon)
  }
}

export const getters = {
  name: state => {
    return state.pokemon.name
  }
}