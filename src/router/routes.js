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
    path: '/button/buttons',
    component: viewResolver('Buttons'),
    meta: {title: 'Button'}
}, {
    path: '/button/icons',
    component: viewResolver('ButtonIcons'),
    meta: {title: 'Button Icon'}
}, {
    path: '/button/groups',
    component: viewResolver('ButtonGroups'),
    meta: {title: 'Button Group'}
}, {
    path: '/button/toggles',
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
    path: '/data-grid',
    component: viewResolver('DataGrid'),
    meta: {title: 'Data Grid'}
}, {
    path: '/tree-grid',
    component: viewResolver('TreeGrid'),
    meta: {title: 'Tree Grid'}
}, {
    path: '/picker/datetime',
    component: viewResolver('DateTimePickers'),
    meta: {title: 'DateTime Picker'}
}, {
    path: '/form/text-field',
    component: viewResolver('TextFields'),
    meta: {title: 'TextField'}
}, {
    path: '/form/text-area',
    component: viewResolver('TextAreas'),
    meta: {title: 'TextArea'}
}, {
    path: '/form/selects',
    component: viewResolver('ComboBoxes'),
    meta: {title: 'ComboBox'}
}, {
    path: '/form/date-field',
    component: viewResolver('DateTimeFields'),
    meta: {title: 'DateTime Field'}
}, {
    path: '/form/controls',
    component: viewResolver('SelectControls'),
    meta: {title: 'Select Controls'}
}, {
    path: '/form/validation',
    component: viewResolver('ValidationForm'),
    meta: {title: 'Validation Form'}
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
