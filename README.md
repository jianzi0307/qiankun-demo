
- 基座需要导入qiankun

```javascript
import { registerMicroApps, start } from 'qiankun’;

// 注册微应用
registerMicroApps([
    {
        // 微应用名称
        name: 'micro1',
        // 入口
        entry: '//localhost:3100',
        // 挂载点
        container: '#container',
        // 触发规则
        activeRule: '/micro1',
    },
    {
        name: 'micro2',
        entry: '//localhost:3200',
        container: '#container',
        activeRule: '/micro2',
    },
]);

// 开启
start({
    prefetch: false,
});
```

- 微应用不需要导入qiankun
   
```javascript
// router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about’,
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: '/micro2', // process.env.BASE_URL,  <======== 修改BaseURL
    routes,
});

export default router;

import Vue from 'vue';
import App from './App.vue';
import router from './router';

let instance = null;

function render(props) {
    console.log(props);
    instance = new Vue({
        router,
        render: (h) => h(App),
    }).$mount('#app’); // 挂载到自己的html中
}

// 乾坤环境动态改变webpack的public_path
if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
// 非乾坤运行环境正常渲染，用于独立开发，与普通的vue项目无差别
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

// 微应用必须要到处bootstrap/mount/unmount三个方法
// 这三个方法必须返回promise
export async function bootstrap(props) {
    console.log(props);
}

export async function mount(props) {
    console.log(props);
    render(props);
}

export async function unmount(props) {
    console.log(props);
    instance.$destroy();
}
```
