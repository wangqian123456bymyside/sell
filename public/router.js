import Vue from 'vue'
import VueRouter from 'vue-router'
import {Home}  from '@pulic/components'

Vue.use(VueRouter)

const routes=[
{
	path:'/',
	name:'home',
	component:Home,
}
 
]
 
]
 const router = new VueRouter({
  	routes,
  })

export 