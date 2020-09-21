export const state = {
    pokemonPageColor: null
  }
  
  export const mutations = {
    SET_COLOR(state, color){ 
      state.pokemonPageColor = color
    },
  }
  
  export const actions = {
   setColor({commit}, color){
     commit('SET_COLOR', color)
   },
  
  }