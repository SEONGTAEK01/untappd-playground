import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Graph from "../components/Graph";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        'app-header': HelloWorld,
        'app-graph': Graph
      }
    }
  ]
})
