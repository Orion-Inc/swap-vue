import Vue from 'vue'
import Router from 'vue-router'

import App from '@/App'

import Auth from '@/components/views/Auth'
import Dashboard from '@/components/views/Dashboard'

import SignIn from '@/components/views/auth/SignIn'
import SignUp from '@/components/views/auth/SignUp'
import ForgotPassword from '@/components/views/auth/ForgotPassword'
import ResetPassword from '@/components/views/auth/ResetPassword'

Vue.use(Router)

const routes = new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: App,
			meta: {
				
			},
			children: [
				{
					path: 'auth',
					component: Auth,
					children: [
						{
							path: 'sign-in',
							name: 'Sign In',
							component: SignIn
						},
						{
							path: 'sign-up',
							name: 'Sign Up',
							component: SignUp
						},
						{
							path: 'forgot-password',
							name: 'Forgot Password',
							component: ForgotPassword
						},
						{
							path: 'reset-password',
							name: 'Reset Password',
							component: ResetPassword
						}
					]
				},
				{
					path: 'dashboard',
					name: 'Dashboard',
					component: Dashboard,
					meta: {
						
					},
					children: [
						{
							path: 'my-profile',
							name: 'My Profile'
						},
						{
							path: 'settings',
							name: 'Settings'
						},
					]
				}
			],
			redirect: to => {

			}
		},
		{
			path: '/home',
			name: 'Home',
			// component: 
		},
		{
			path: '/about-us',
			name: 'About Us',
			// component: 
		},
		{
			path: '/contact-us',
			name: 'Contact us',
			// component: 
		}
	],
	mode: 'history'
});

export default routes;
