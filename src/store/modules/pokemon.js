
export const state = {
  pokemons: []
}
export const mutations = {

  SET_POKEMONS(state, pokemons){ 
    state.pokemons = pokemons 
  },
  SET_EXTRA_POKEMONS(state, pokemons){
    state.pokemons = [...state.pokemons, ...pokemons]
  }
}

export const actions = {

 setPokemons({commit}, pokemons){
   commit('SET_POKEMONS', pokemons)
 },
 setExtraPokemons({commit}, pokemons){
   commit('SET_EXTRA_POKEMONS',pokemons)
 }
}
