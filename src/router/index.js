import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/:catchAll(.*)', component: NotFound } // Route pour la page 404
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
