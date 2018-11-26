import Vue from 'vue'
import Router from 'vue-router'

import SignIn from '@/components/auth/SignIn'
import SignUp from '@/components/auth/SignUp'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/sign-in',
			name: 'SignIn',
			component: SignIn
		},
		{
			path: '/sign-up',
			name: 'SignUp',
			component: SignUp
		}
	]
})
