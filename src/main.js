// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

require('./assets/img/favicon.png');
require('./assets/css/bulma.css');
require('./assets/css/core.css');
//require('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
//require('./assets/css/icons.min.css');
//require('./assets/libs/parsleyjs/dist/parsley.css');



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
