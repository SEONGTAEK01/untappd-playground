// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
export const eventBus = new Vue();
import Vue from 'vue'
import App from './App'
import VueAxios from './plugins/axios'
import router from './router'

import VueApexCharts from 'vue-apexcharts'

export const bus = new Vue();

Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts);


Vue.config.productionTip = false;
Vue.use(VueAxios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
});
