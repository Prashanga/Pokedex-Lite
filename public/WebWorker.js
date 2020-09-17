// For large number of GET requests only
// Not called currently, but might be implemented in the fuyture3

self.addEventListener('message', function(e) {  
  let pokemons
  
  fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=500')
    .then( response => {
      return response.json() //Turn the Response object into a JS object
    })
    .then( data => {
      // self.postMessage(data.results)
      pokemons = data.results
    })
    .then(() => {
      Promise.all(pokemons.map(pokemon => {
          return fetch(pokemon.url)
            .then(response => {
              return response.json()
            })
            .then( data => {
              return data
            })
        }
      ))
        .then( res => {
          pokemons.forEach((pokemon, index) => {
            pokemons[index] = { ...pokemons[index], ...res[index]}
          }); 
          self.postMessage(pokemons)
        })
    })
    .catch(
      err => {
        self.postMessage(err.message)
      } 
    )
  }, false)