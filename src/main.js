// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import VueFilter from 'vue-filter';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import App from './App'
import router from './router'

import { store } from './store'

require('./assets/img/favicon.png');

require('./assets/css/nucleo-icons.css');
require('./assets/css/typicons.min.css');


require('./assets/css/core.css');

require('./assets/js/core.js');
require('./assets/js/plugins/perfect-scrollbar.jquery.min.js');


Vue.use(BootstrapVue);
Vue.use(VueFilter);

library.add(fas, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (!store.getters.isAuthenticated) {
			next({
				name: 'Sign In'
			})
		} else {
			next()
		}
	} else if(to.matched.some(record => record.meta.guest)) {
		if (store.getters.isAuthenticated) {
			next({
				name: 'Dashboard'
			})
		} else if (store.getters.isActivated) {
			next({
				name: 'Activate'
			})
		} else {
			next()
		}
	} else {
		next()
	}
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	components: { App },
	template: '<App/>'
});