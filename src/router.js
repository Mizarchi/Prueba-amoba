import { createRouter, createWebHashHistory } from "vue-router";

const routes = [

{ name: 'Login', path: "/", component: () => import('./components/Login.vue') },
{ name: 'Menu', path: "/Home", component: ()=> import( './components/Home.vue') },

];

const history = createWebHashHistory();

const router = createRouter({
history,
routes,
});

export default router;
