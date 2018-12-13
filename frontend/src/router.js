import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import HomePage from './components/HomePage.vue';
import Planner from './views/Planner.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/dashboard",
      name: "homepage",
      component: HomePage
    },
    {
      path: "/planner",
      name: "planner",
      component: Planner
    },

    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // },
    // {
    //   path: "/courses",
    //   name: "courses",
    //   component: Courses,
    //   meta: {
    //     icon:"school",
    //     breadcrumbs: [
    //       {text: "Home", href: "/"}
    //     ]
    //   }
    //}
  ]
});
