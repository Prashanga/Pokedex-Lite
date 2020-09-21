import Vue from 'vue'
import Vuex from 'vuex'
import * as pokemon from './modules/pokemon.js'
import * as navbar from './modules/navbar.js'

Vue.use(Vuex)


const Store = new Vuex.Store({
  modules: {
    pokemon,
    navbar
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV
})

export default function (/* { ssrContext } */) {

  return Store
}

export { Store }
