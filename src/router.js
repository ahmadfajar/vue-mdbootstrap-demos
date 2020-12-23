import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './navigation';

Vue.use(VueRouter);

export default new VueRouter({
    routes: routes
});
