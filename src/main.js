import Vue from 'vue';
import App from './App';
import router from './router';

import VueAgile from 'vue-agile'

Vue.use(VueAgile)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
