

export const state = {
  pokemons: []
}

export const mutations = {

  GET_POKEMONS(state, pokemons) {
    state.pokemons = pokemons
  },

}
export const actions = {

//  getPokemons({ commit }) {
  //   return InventoryService.getpokemons().then(response => {
  //     commit('GET_INVENTORIES', response.data.items)
  //   })
  // }
}
