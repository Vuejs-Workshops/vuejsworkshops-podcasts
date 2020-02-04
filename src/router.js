import Vue from 'vue'
import Router from 'vue-router'

import Podcasts from "./components/Podcasts";
import Podcast from "./components/Podcast";
import About from "./components/About";

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Podcasts },
        { path: "/podcasts", component: Podcasts },
        { path: "/about", component: About },
        { path: "/:id", component: Podcast },
        { path: "*", component: Podcasts }
  ]
})
