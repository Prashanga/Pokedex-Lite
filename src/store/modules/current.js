export const state = {
    pokemonPageColor: null,
    pokemon: null,
    page: 1
}
  
export const mutations = {
  SET_COLOR(state, color){ 
    state.pokemonPageColor = color
  },
  SET_POKEMON(state, pokemon){ 
    state.pokemon = pokemon
  },
  SET_PAGE(state, page){ 
    state.page = page
  },
}
  
export const actions = {
  setColor({commit}, color){
    commit('SET_COLOR', color)
  },
  setPokemon({commit}, pokemon){
  commit('SET_POKEMON', pokemon)
  },
  setPage({commit}, page){
    commit('SET_PAGE', page)
  },

}