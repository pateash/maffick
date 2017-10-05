import Vue from 'vue';
import App from './App';
import router from './router';

import VueAgile from 'vue-agile';

import VueProgressBar from 'vue-progressbar';

import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload)


const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)

Vue.use(VueAgile)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
