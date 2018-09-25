//公共样式
import 'iview/dist/styles/iview.css';
import '@/assets/css/reset.css';

//npm
import Vue from 'vue'
import VueRouter from "vue-router";
import iView from 'iview';

import App from './App'
import routes from './router'
import './mock/mock';

Vue.config.productionTip = false

const router = new VueRouter({
  routes: routes
});


Vue.use(VueRouter);
Vue.use(iView);

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(() => {
  iView.LoadingBar.finish();
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
