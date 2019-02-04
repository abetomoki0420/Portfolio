import vue from 'vue';
import VueRouter from "vue-router";

import Portfolio from '@/components/Portfolio'
import About from '@/components/About'

vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: About
    },
    {
      path: '/portfolio',
      component: Portfolio
    },
  ]
});
