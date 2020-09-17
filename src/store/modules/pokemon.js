export const state = {
  pokemons: []
}

export const mutations = {

  SET_POKEMONS(state, pokemonList){ 
    let {page, pokemons } = pokemonList
    state.pokemons = { page, pokemons }
  },
  // SET_EXTRA_POKEMONS(state, pokemons){
  //   state.pokemons = [...state.pokemons, ...pokemons]
  // }
}

export const actions = {

 setPokemons({commit}, pokemonList){
   commit('SET_POKEMONS', pokemonList)
 },
//  setExtraPokemons({commit}, pokemons){
//    commit('SET_EXTRA_POKEMONS',pokemons)
//  }
}
