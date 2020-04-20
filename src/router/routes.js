const viewResolver = (name) => require('../views/' + name).default;

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    component: viewResolver('Home'),
}, {
    path: '/alerts',
    component: viewResolver('Alerts'),
}];

export default routes;
