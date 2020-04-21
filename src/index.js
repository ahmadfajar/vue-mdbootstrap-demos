import Vue from "vue";
import VueMdb, { AxiosPlugin } from "vue-mdbootstrap";
import router from "./router";
import store from "./state";
import App from "./App.vue";

Vue.use(VueMdb);
// only requires if using BsGrid, BsModel, BsStore or needs to perform HTTP Request
Vue.use(AxiosPlugin);

new Vue({
    el: '#app',
    router,
    store,
    components: {App},
});
