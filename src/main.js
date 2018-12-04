// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faColumns, faWallet, faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import App from './App'
import router from './router'

require('./assets/img/favicon.png');

require('./assets/css/nucleo-icons.css');
require('./assets/css/typicons.min.css');


require('./assets/css/core.css');
require('./assets/js/plugins/perfect-scrollbar.jquery.min.js');


Vue.use(BootstrapVue);
library.add(faColumns, faWallet, faCogs)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});