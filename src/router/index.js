import Vue from 'vue'
import Router from 'vue-router'

import App from '@/App'

import Auth from '@/components/views/Auth'
import Dashboard from '@/components/views/Dashboard'

import SignIn from '@/components/views/auth/SignIn'
import LogOut from '@/components/views/auth/LogOut'
import SignUp from '@/components/views/auth/SignUp'
import ForgotPassword from '@/components/views/auth/ForgotPassword'
import ResetPassword from '@/components/views/auth/ResetPassword'

import DashboardHome from '@/components/views/dashboard/DashboardHome'
import Trade from '@/components/views/dashboard/Trade'

import PostAd from '@/components/views/dashboard/trade/PostAd'
import Buy from '@/components/views/dashboard/trade/Buy'
import Sell from '@/components/views/dashboard/trade/Sell'

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
					meta: {
						guest: true
					},
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
					component: Dashboard,
					meta: {
						requiresAuth: true
					},
					children: [
						{
							path: 'home',
							name: 'Dashboard',
							component: DashboardHome
						},
						{
							path: 'my-profile',
							name: 'My Profile',
						},
						{
							path: 'settings',
							name: 'Settings'
						},
						{
							path: 'trade',
							component: Trade,
							children: [
								{
									path: 'buy',
									name: 'Buy',
									component: Buy
								},
								{
									path: 'sell',
									name: 'Sell',
									component: Sell
								},
								{
									path: 'new',
									name: 'New Ad',
									component: PostAd
								},
							]
						},
						{
							path: 'my-wallet',
							name: 'My Wallet'
						},
						{
							path: 'logout',
							name: 'Log Out',
							component: LogOut
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
