import Vue from 'vue';
import { registerMicroApps, start } from 'qiankun';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(ElementUI);

Vue.config.productionTip = false;

registerMicroApps([
  {
    name: 'micro1',
    entry: '//localhost:3100',
    container: '#container',
    activeRule: '/micro1',
  },
  {
    name: 'micro2',
    entry: '//localhost:3200',
    container: '#container',
    activeRule: '/micro2',
  },
]);

start({
  prefetch: false,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
