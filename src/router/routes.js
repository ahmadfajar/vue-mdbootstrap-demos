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
    path: '/button-icons',
    component: viewResolver('ButtonIcons'),
    meta: {title: 'Button Icon'}
}, {
    path: '/button-groups',
    component: viewResolver('ButtonGroups'),
    meta: {title: 'Button Group'}
}, {
    path: '/button-toggles',
    component: viewResolver('ButtonToggles'),
    meta: {title: 'Button Toggle'}
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
}, {
    path: '/select-controls',
    component: viewResolver('SelectControls'),
    meta: {title: 'Select Controls'}
}, {
    path: '/progress-controls',
    component: viewResolver('ProgressControls'),
    meta: {title: 'Progress Controls'}
}, {
    path: '/tabs',
    component: viewResolver('Tabs'),
    meta: {title: 'Tabs'}
}, {
    path: '/modals',
    component: viewResolver('Modals'),
    meta: {title: 'Modal'}
}, {
    path: '/lightbox',
    component: viewResolver('LightBoxes'),
    meta: {title: 'LightBox'}
}, {
    path: '/notifications',
    component: viewResolver('Notifications'),
    meta: {title: 'Notification'}
}, {
    path: '/tooltips',
    component: viewResolver('Tooltips'),
    meta: {title: 'Tooltip'}
}];

export default routes;
