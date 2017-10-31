import Main from './views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => { require(['./views/login.vue'], resolve); }
};
export const resigister = {
    path: '/resigister',
    name: 'resigister',
    meta: {
        title: '注册'
    },
    component: resolve => { require(['./views/resigister.vue'], resolve); }
};
export const announce = {
    path: '/announce',
    name: 'announce',
    meta: {
        title: '服务协议'
    },
    component: resolve => { require(['./views/announce.vue'], resolve); }
};
export const success = {
    path: '/success',
    name: 'success',
    meta: {
        title: '注册成功'
    },
    component: resolve => { require(['./views/success.vue'], resolve); }
};

export const page404 = {
    path: '/*',
    name: 'error_404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => { require(['./views/error_page/404.vue'], resolve); }
};

export const page401 = {
    path: '/401',
    meta: {
        title: '401-权限不足'
    },
    name: 'error_401',
    component: resolve => { require(['./views/error_page/401.vue'], resolve); }
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error_500',
    component: resolve => { require(['./views/error_page/500.vue'], resolve); }
};

export const preview = {
    path: '/preview',
    name: 'preview',
    component: resolve => { require(['./views/form/article-publish/preview.vue'], resolve); }
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: resolve => { require(['./views/main_components/locking-page.vue'], resolve); }
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    component: Main,
   children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: resolve => { require(['./views/home/home.vue'], resolve); } },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: resolve => { require(['./views/own-space/own-space.vue'], resolve); } },
        { path: 'order/:order_id', title: '订单详情', name: 'order_info', component: resolve => { require(['./views/advanced-router/component/order-info.vue'], resolve); } },  // 用于展示动态路由
        { path: 'shopping', title: '购物详情', name: 'shopping', component: resolve => { require(['./views/advanced-router/component/shopping-info.vue'], resolve); } },  // 用于展示带参路由
        { path: 'message', title: '消息中心', name: 'message_index', component: resolve => { require(['./views/message/message.vue'], resolve); } }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/home',
        icon: 'key',
        name: 'hone',
        title: '首页',
        component: Main,
        children: [
            { path: 'index', title: '首页', name: 'access_index', component: resolve => { require(['./views/home/home.vue'], resolve); } }
        ]
    },
    {
        path: '/services',
        icon: 'social-buffer',
        name: 'services',
        title: '服务',
        component: Main,
        children: [
            {
                path: 'redpaper',
                icon: 'compose',
                name: 'redpaper',
                title: '红包',
                component: resolve => { require(['./views/services/text-editor/text-editor.vue'], resolve); }
            },
            {
                path: 'recruit',
                icon: 'pound',
                name: 'recruit',
                title: '招聘',
                component: resolve => { require(['./views/services/markdown-editor/markdown-editor.vue'], resolve); }
            },
            {
                path: 'SocialSecurity',
                icon: 'crop',
                name: 'SocialSecurity',
                title: '社保',
                component: resolve => { require(['./views/services/image-editor/image-editor.vue'], resolve); }
            },
            {
                path: 'survey',
                icon: 'arrow-move',
                name: 'survey',
                title: '背景调查',
                component: resolve => { require(['./views/services/draggable-list/draggable-list.vue'], resolve); }
            },
            {
                path: 'IntellectualProperty',
                icon: 'android-upload',
                name: 'IntellectualProperty',
                title: '知识产权',
                component: resolve => { require(['./views/services/file-upload/file-upload.vue'], resolve); }
            }
        ]
    },
      {
        path: '/admin',
        icon: 'ios-grid-view',
        name: 'admin',
        title: '管理',
        component: Main,
        children: [
            { path: 'dragableTable', title: '人才', name: 'dragable-table', icon: 'arrow-move', component: resolve => { require(['./views/admins/dragable-table.vue'], resolve); } },
            { path: 'editableTable', title: '业务', name: 'editable-table', icon: 'edit', component: resolve => { require(['./views/admins/editable-table.vue'], resolve); } },
            { path: 'searchableTable', title: '品牌', name: 'searchable-table', icon: 'search', component: resolve => { require(['./views/admins/searchable-table.vue'], resolve); } },
            { path: 'exportableTable', title: '场地', name: 'exportable-table', icon: 'code-download', component: resolve => { require(['./views/admins/exportable-table.vue'], resolve); } },
            { path: 'table2image', title: '文案', name: 'table-to-image', icon: 'images', component: resolve => { require(['./views/admins/table-to-image.vue'], resolve); } }
        ]
    },
    
    {
        path: '/form',
        icon: 'android-checkbox',
        name: 'form',
        title: '工单',
        component: Main,
        children: [
            { path: 'artical-publish', title: '购买记录', name: 'artical-publish', icon: 'compose', component: resolve => { require(['./views/form/article-publish/article-publish.vue'], resolve); } },
            { path: 'workflow', title: '充值记录', name: 'workflow', icon: 'arrow-swap', component: resolve => { require(['./views/form/work-flow/work-flow.vue'], resolve); } }

        ]
    },
     {
        path: '/setup',
        icon: 'ios-grid-view',
        name: 'setunp',
        title: '设置',
        component: Main,
        children: [
            { path: 'information', title: '基本信息', name: 'information', icon: 'arrow-move', component: resolve => { require(['./views/setup/information.vue'], resolve); } },
            { path: 'Einformation', title: '增强信息', name: 'Einformation', icon: 'edit', component: resolve => { require(['./views/setup/Einformation.vue'], resolve); } },
            { path: 'searchableTable', title: '认证', name: 'searchable-table', icon: 'search', component: resolve => { require(['./views/setup/searchable-table.vue'], resolve); } },
            { path: 'exportableTable', title: '充值', name: 'exportable-table', icon: 'code-download', component: resolve => { require(['./views/setup/exportable-table.vue'], resolve); } },
            { path: 'table2image', title: '管理员', name: 'table-to-image', icon: 'images', component: resolve => { require(['./views/setup/table-to-image.vue'], resolve); } }
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    resigister,
    announce,	
    success,
    otherRouter,
    preview,
    locking,
    ...appRouter,
    page500,
    page401,
    page404
];
