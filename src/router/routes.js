
const routes = [
  {
    path: '/', 
    name: 'Home',
    component: () => import('pages/Index.vue') ,
    meta: {
      title: 'Pokédex',
      metaTags: [
        {
          name: 'description',
          content: 'A simple Pokédex'
        }
      ]
    },
  },
  {
    path: '/pokemon/:id/', 
    name: 'PokemonPage',
    component: () => import('pages/PokemonPage.vue'),
    meta: {
      title: 'Pokédex',
    }
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
    meta: {
      title: 'Pokédex',
    }
  }
]

export default routes
