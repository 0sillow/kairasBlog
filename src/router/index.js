import {createRouter,createMemoryHistory} from 'vue-router'
import Index from '@/view/index/Index.vue'

const routes=[
    {path:'/',component:Index}
]
const router=createRouter({
    history:createMemoryHistory(),
    routes
})
export default router