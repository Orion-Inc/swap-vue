import Vue from 'vue'
import Router from 'vue-router'

import SignIn from '@/components/views/auth/SignIn'
import SignUp from '@/components/views/auth/SignUp'
import ForgotPassword from '@/components/views/auth/ForgotPassword'

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
		},
		{
			path: '/forgot-password',
			name: 'ForgotPassword',
			component: ForgotPassword
		},
	]
})
