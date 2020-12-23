import Vue from "vue";
import VueMdb, { AxiosPlugin } from "vue-mdbootstrap";
import router from "./router";
import store from "./state";
import App from "./App.vue";

// default requirement, to load the UI components
Vue.use(VueMdb);
// only requires if using BsGrid, BsTreeGrid, BsModel, BsStore or needs to perform HTTP Request
Vue.use(AxiosPlugin);

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});

const app = new Vue({
    ...App,
    router,
    store,
});

app.$mount('#app');
