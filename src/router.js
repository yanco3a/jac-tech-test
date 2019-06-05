// NPM dependencies
import Vue from "vue";
import Router from "vue-router";

// local dependencies
import JobBoard from "./views/JobBoard.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "job-board",
      component: JobBoard
    }
  ]
});
