import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import Quiz from './pages/Quiz.vue'
import CreateQuiz from './pages/CreateQuiz.vue'
import Admin from './pages/Admin.vue'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/quiz-:id',
      name: 'quiz',
      component: Quiz,
      props: true
    },
    {
      path: '/create-quiz', 
      name: 'createQuiz',
      component: CreateQuiz
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
})
