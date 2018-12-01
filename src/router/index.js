import Vue from 'vue'
import Router from 'vue-router'

import SignIn from '@/components/views/auth/SignIn'
import SignUp from '@/components/views/auth/SignUp'
import ForgotPassword from '@/components/views/auth/ForgotPassword'
import ResetPassword from '@/components/views/auth/ResetPassword'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/sign-in',
			name: 'Sign In',
			component: SignIn
		},
		{
			path: '/sign-up',
			name: 'Sign Up',
			component: SignUp
		},
		{
			path: '/forgot-password',
			name: 'Forgot Password',
			component: ForgotPassword
		},
		{
			path: '/reset-password',
			name: 'Reset Password',
			component: ResetPassword
		}
	]
})
