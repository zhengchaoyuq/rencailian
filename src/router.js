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
export const email = {
    path: '/email',
    name: 'email',
    meta: {
        title: '邮箱验证'
    },
    component: resolve => { require(['./views/email.vue'], resolve); }
};
export const fillin = {
    path: '/fillin',
    name: 'fillin',
    meta: {
        title: '基本信息填写'
    },
    component: resolve => { require(['./views/fillin.vue'], resolve); }
};
export const success = {
    path: '/success',
    name: 'success',
    meta: {
        title: '注册成功'
    },
    component: resolve => { require(['./views/success.vue'], resolve); }
};
export const creatNewView = {
    path: '/creatNewView',
    name: 'creatNewView',
    meta: {
        title: '建立新视图'
    },
    component: resolve => { require(['./views/creatNewView.vue'], resolve); }
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
        {
            path: 'home',
            title: {i18n: '首页'},
            name: 'home',
            component: resolve => { require(['./views/home/home.vue'], resolve); }
        },
        {
            path: 'ownspace',
            title: '个人中心',
            name: 'ownspace_index',
            component: resolve => { require(['./views/own-space/own-space.vue'], resolve); }
        },
        {
            path: 'message',
            title: '消息中心',
            name: 'message_index',
            component: resolve => { require(['./views/message/message.vue'], resolve); }
        }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/home',
        icon: 'key',
        name: 'home',
        title: '首页',
        component: Main,
        children: [
            {
                path: 'index',
                title: '首页',
                name: 'index',
                component: resolve => { require(['./views/home/home.vue'], resolve); }
            }
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
                component: resolve => { require(['./views/services/redpaper/redpaper.vue'], resolve); }
            },
            {
                path: 'recruit',
                icon: 'pound',
                name: 'recruit',
                title: '招聘',
                component: resolve => { require(['./views/services/recruit/recruit.vue'], resolve); }
            },
            {
                path: 'social',
                icon: 'crop',
                name: 'social',
                title: '社保',
                component: resolve => { require(['./views/services/social/social.vue'], resolve); }
            },
            {
                path: 'survey',
                icon: 'arrow-move',
                name: 'survey',
                title: '背景调查',
                component: resolve => { require(['./views/services/survey/survey.vue'], resolve); }
            },
            {
                path: 'Property',
                icon: 'android-upload',
                name: 'Property',
                title: '知识产权',
                component: resolve => { require(['./views/services/Property/Property.vue'], resolve); }
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
            {
                path: 'personnel',
                title: '人才',
                name: 'personnel',
                icon: 'arrow-move',
                component: resolve => { require(['./views/admins/personnel.vue'], resolve); }
            },
            {
                path: 'business',
                title: '业务',
                name: 'business',
                icon: 'edit',
                component: resolve => { require(['./views/admins/business.vue'], resolve); }
            },
            {
                path: 'brand',
                title: '品牌',
                name: 'brand',
                icon: 'search',
                component: resolve => { require(['./views/admins/brand.vue'], resolve); }
            },
            {
                path: 'field',
                title: '场地',
                name: 'field',
                icon: 'code-download',
                component: resolve => { require(['./views/admins/field.vue'], resolve); }
            },
            {
                path: 'copy',
                title: '文案',
                name: 'copy',
                icon: 'images',
                component: resolve => { require(['./views/admins/copy.vue'], resolve); }
            }
        ]
    },
    {
        path: '/workorder',
        icon: 'android-checkbox',
        name: 'workorder',
        title: '工单',
        component: Main,
        children: [
            {
                path: 'purchase',
                title: '购买记录',
                name: 'purchase',
                icon: 'compose',
                component: resolve => { require(['./views/workorder/purchase/purchase.vue'], resolve); }
            },
            {
                path: 'recharge',
                title: '充值记录',
                name: 'recharge',
                icon: 'arrow-swap',
                component: resolve => { require(['./views/workorder/recharge/recharge.vue'], resolve); }
            }

        ]
    },
    {
        path: '/setup',
        icon: 'ios-grid-view',
        name: 'setup',
        title: '设置',
        component: Main,
        children: [
            {
                path: 'information',
                title: '基本信息',
                name: 'information',
                icon: 'arrow-move',
                component: resolve => { require(['./views/setup/information.vue'], resolve); }
            },
            {
                path: 'Einformation',
                title: '增强信息',
                name: 'Einformation',
                icon: 'edit',
                component: resolve => { require(['./views/setup/Einformation.vue'], resolve); }
            },
            {
                path: 'authentication',
                title: '认证',
                name: 'authentication',
                icon: 'search',
                component: resolve => { require(['./views/setup/authentication.vue'], resolve); }
            },
            {
                path: 'exportableTable',
                title: '充值',
                name: 'exportable-table',
                icon: 'code-download',
                component: resolve => { require(['./views/setup/exportable-table.vue'], resolve); }
            },
            {
                path: 'adminer',
                title: '管理员',
                name: 'adminer',
                icon: 'images',
                component: resolve => { require(['./views/setup/adminer.vue'], resolve); }
            }
        ]
    },
    {
        path: '/mydata',
        icon: 'android-checkbox',
        name: 'mydata',
        title: '大数据',
        component: Main,
        children: [
            {
                path: 'Visuakization',
                title: '可视化',
                name: 'Visuakization',
                icon: 'compose',
                component: resolve => { require(['./views/bigdata/Visuakization.vue'], resolve); }
            },
            {
                path: 'data',
                title: '我的数据',
                name: 'data',
                icon: 'arrow-swap',
                component: resolve => { require(['./views/bigdata/data.vue'], resolve); }
            }

        ]
    },
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    resigister,
    announce,
    email,
    fillin,
    success,
    creatNewView,
    otherRouter,
    locking,
    ...appRouter,
    page500,
    page401,
    page404
];
