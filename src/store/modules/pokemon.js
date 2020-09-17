export const state = {
  pokemons: []
}
export const mutations = {

  SET_POKEMONS(state, {page, pokemons}){ 
    state.pokemons = {
      page,    
      pokemons
      }
  },
  // SET_EXTRA_POKEMONS(state, pokemons){
  //   state.pokemons = [...state.pokemons, ...pokemons]
  // }
}

export const actions = {

 setPokemons({commit}, {page, pokemons}){
   commit('SET_POKEMONS', {page, pokemons})
 },
//  setExtraPokemons({commit}, pokemons){
//    commit('SET_EXTRA_POKEMONS',pokemons)
//  }
}
