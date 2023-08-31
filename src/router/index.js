import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import DetailsMovie from '../views/DetailsMovie.vue'
import Perfil from '../views/PerfilesView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',name: 'login',component: LoginView
    },
    {
      path:'/about', name: 'about' ,component: import('../views/AboutView.vue') 
    },
    {
      path:'/home', name: 'home', component: HomeView 
      
    },
    {
      path:'/perfil', name: 'perfil', component: Perfil 
    },
    {
      path:'/details/:movieId', component: DetailsMovie
    }
  ]
})

export default router
