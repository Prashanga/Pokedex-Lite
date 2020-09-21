
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        name: 'Home',
        component: () => import('pages/Index.vue') 
      }
    ]
  },
  {
    path: '/pokemon/:id/:name', 
    name: 'PokemonPage',
    component: () => import('pages/PokemonPage.vue'), 
    props: true
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
