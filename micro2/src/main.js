import Vue from 'vue';
import App from './App.vue';
import router from './router';

/* eslint-disable */

let instance = null;
function render(props) {
  console.log(props);
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount('#app');// 挂载到自己的html中
}

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

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
