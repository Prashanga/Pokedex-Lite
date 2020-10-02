
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
    path: '/pokemon/:id/:name', 
    name: 'PokemonPage',
    component: () => import('pages/PokemonPage.vue'), 
    props: true,
    meta: {
      title: 'Pokédex',
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
    meta: {
      title: 'Pokédex',
    }
  }
]

export default routes
