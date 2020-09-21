export const state = {
  pokemons: []
}

export const mutations = {
  SET_POKEMONS(state, pokemonList){ 
    let {page, pokemons } = pokemonList
    state.pokemons = { page, pokemons }
  },
}

export const actions = {
 setPokemons({commit}, pokemonList){
   commit('SET_POKEMONS', pokemonList)
 },

}
