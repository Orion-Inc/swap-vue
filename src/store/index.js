import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(require('vue-cookies'))

const axios = require('axios');

axios.defaults.baseURL = 'https://api-coin-wrapper.herokuapp.com/api/v1';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['x-access-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWI5YThiOTFiMDhmMGExYTI3MWRiM2JmIiwiZmlyc3RuYW1lIjoiQWNoZWFtcG9uZyIsIm90aGVybmFtZSI6IkxvcmQiLCJ1c2VybmFtZSI6ImxvcmRrYXkiLCJlbWFpbCI6InZvbHRleDE5OTZAZ21haWwuY29tIiwicGhvbmVfbnVtYmVyIjpbMjAwNzQ2NDE3XSwiaWF0IjoxNTM5MjkxMDU5LCJleHAiOjE1MzkyOTEzNTl9.9mXUk8_dU7wRkFUhk8BPm6YZY4Dxguscq2HayXnfrik';

export const store = new Vuex.Store({
    state: {
        token: $cookies.get('token') || null,
        user: JSON.parse(sessionStorage.getItem('user')) || [],
    },
    getters: {
        isAuthenticated(state) {
            return state.token != null
        }
    },
    mutations: {
        getToken(state, token) {
            state.token = token;
        },
        userData(state, user) {
            state.user = user;
        },
        logout(state) {
            state.token = null;
            state.user = [];
        }
    },
    actions: {
        AUTHENTICATE(context, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('/auth/authenticate', {
                    credentials: credentials.email,
                    password: credentials.password
                }).then(function (response) {
                    const token = response.data.meta.token;
                    const user = response.data.results;
    
                    $cookies.set("token", token, "30MIN");
                    sessionStorage.setItem('user', JSON.stringify(user));
    
                    context.commit('getToken', token);
                    context.commit('userData', user);

                    resolve(response)
                }).catch(function (error) {
                    console.log(error);
                    reject(error);
                });
            })
        },
        LOGOUT(context) {
            if(context.getters.isAuthenticated) {
                $cookies.remove("token");
                sessionStorage.removeItem('user');

                context.commit('logout');
            }
        },
        REGISTER(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('/auth/signup', {
                    firstname: data.firstname,
                    othername: data.othername,
                    username: data.username,
                    email: data.email,
                    phone: data.phone,
                    password: data.password
                }).then(function (response) {
                    resolve(response)
                }).catch(function (error) {
                    console.log(error);
                    reject(error);
                });
            })
        }
    }
});
