// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import App from './App'
import router from './router'

require('./assets/img/favicon.png');
require('./assets/css/nucleo-icons.css');
require('./assets/css/fontawesome.min.css');

require('./assets/css/core.css');
require('./assets/js/plugins/perfect-scrollbar.jquery.min.js');



Vue.use(BootstrapVue);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});