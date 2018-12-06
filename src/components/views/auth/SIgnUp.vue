<template>
    <div class="wrapper">
        <div class="page-header">
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-md-6 offset-lg-1 d-none d-md-block d-lg-block d-xl-block">
                            <div class="card card-message">
                                <div class="card-body">
                                    <div class="col-lg-12">
                                        <h3>
                                            We are <span class="text-primary">swap.io</span>
                                        </h3>
                                        <p class="mb-3">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel...</p>
                                        <div class="btn-wrapper mb-3">
                                            <p class="category">
                                                More about <router-link :to="{ name: 'About Us' }">swap.io</router-link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card card-register">
                                <div class="card-header">
                                    <h4 class="card-title">Sign Up</h4>
                                </div>
                                <div class="card-body">
                                    <SignUpForm/>
                                </div>
                            </div>
                            <p class="text-white">Already have an Account? <router-link :to="{ name: 'Sign In' }" class="text-white">Sign in</router-link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SignUpForm from '../../../components/forms/auth/sign-up-form.vue';

export default {
    name: 'SignUp',
    components: {SignUpForm}
}
</script>
