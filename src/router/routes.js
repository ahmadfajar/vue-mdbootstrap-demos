const viewResolver = (name) => require('../views/' + name).default;

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    component: viewResolver('Home'),
    meta: {title: 'Home'}
}, {
    path: '/alerts',
    component: viewResolver('Alerts'),
    meta: {title: 'Alert'}
}, {
    path: '/avatars',
    component: viewResolver('Avatars'),
    meta: {title: 'Avatar'}
}, {
    path: '/image-holders',
    component: viewResolver('ImageHolders'),
    meta: {title: 'Image Holder'}
}, {
    path: '/badges',
    component: viewResolver('Badges'),
    meta: {title: 'Badge'}
}, {
    path: '/icons',
    component: viewResolver('Icons'),
    meta: {title: 'Icon'}
}, {
    path: '/buttons',
    component: viewResolver('Buttons'),
    meta: {title: 'Button'}
}, {
    path: '/button-groups',
    component: viewResolver('ButtonGroups'),
    meta: {title: 'Button Group'}
}, {
    path: '/dropdowns',
    component: viewResolver('DropdownMenus'),
    meta: {title: 'Dropdown Menu'}
}, {
    path: '/cards',
    component: viewResolver('Cards'),
    meta: {title: 'Card'}
}, {
    path: '/datalist',
    component: viewResolver('DataList'),
    meta: {title: 'Data List'}
}];

export default routes;
