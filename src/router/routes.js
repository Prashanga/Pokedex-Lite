
const routes = [
  {
    path: '/', 
    name: 'Home',
    component: () => import('pages/Index.vue') ,
    meta: {
      title: 'Pokédex Lite',
      metaTags: [
        {
          name: 'description',
          content: 'A simple Pokédex'
        }
      ]
    },
  },
  {
    path: '/about', 
    name: 'About',
    component: () => import('pages/About.vue'),
    meta: {
      title: 'About | Pokédex Lite',
    }
  },
  {
    path: '/pokemon/:id/', 
    name: 'PokemonPage',
    component: () => import('pages/PokemonPage.vue'),
    meta: {
      title: 'Pokédex Lite',
    }
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
    meta: {
      title: 'Pokédex Lite',
    }
  }
]

export default routes
