import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import CadastroUsuarioView from '../views/CadastroUsuarioView.vue'
import CadastroServicoView from '../views/CadastroServicoView.vue'
import ServicoBySegmentoView from '../views/ServicoBySegmentoView.vue'
import ServicoAvaliacaoView from '../views/ServicoAvaliacaoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sobre',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
 {
  path:"/login",
  name:"login",
  component:LoginView
 },
 {
  path:"/cadastro-usuario",
  name:"cadastro-usuario",
  component:CadastroUsuarioView
 }, 
 {
  path:"/cadastro-servico",
  name:"cadastro-servico",
  component:CadastroServicoView
 },
 {
  path:"/servicos/:idsegmento/segmento",
  name:"servicos",
  component:ServicoBySegmentoView
 },
 {
  path:"/servicos/:idservico/detalhe",
  name:"servicos-detalhe",
  component:ServicoAvaliacaoView
 }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
