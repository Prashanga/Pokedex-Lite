import axios from 'axios'

const baseUrl = "https://pokeapi.co/api/v2"

const apiClient = axios.create({
  baseUrl,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  apiClient,
  getAllPokemons() {
    return apiClient.get('/pokemon/?offset=0&limit=20')
  }
}
