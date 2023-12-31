import { createRouter, createWebHistory } from 'vue-router'
import Denglv from '../views/Denglv.vue'
import Zhuye from '../views/Zhuye.vue'
import Shouye from '../views/Shouye.vue'
import Ershoushichang from '../views/Ershoushichang.vue'
import Geren from '../views/Geren.vue'
import Fabu from '../views/Fabu.vue'
import More from '../views/More.vue'
import Gonggao from '../views/Gonggao.vue'
import Guanli from '../views/Guanli.vue'
import Myfabu from  '../views/Myfabu.vue'
import Inform from  '../views/Inform.vue'
const routes = [
  {
    path: '',
    name: 'home',
    component: Denglv
  },
  {
    path:'/home',
    name:'home1',
    component:Zhuye,
    children:[
      {
        path:'',
        name:'1',
        component:Shouye
      },{
        path:'/notice',
        name:'2',
        component:Gonggao
      },
      {
        path:'/market',
        name:'3',
        component:Ershoushichang
      },
      {
        path:'/issue',
        name:'4',
        component:Fabu
        
      },{
        path:'/manage',
        name:'5',
        component:Guanli
      },
      {
        path:'/cart',
        name:'6',
        component:Geren
        
      },
      {
        path:'/myfabu',
        name:'7',
        component:Myfabu
      },
      {
        path:'/inform',
        name:'8',
        component: Inform
      },
      {
        path:'/more',
        name:'9',
        component:More
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
