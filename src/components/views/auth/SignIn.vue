<template>
    <div class="wrapper">
        <div class="page-header">
            <div class="page-header-image"></div>
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 offset-lg-4 offset-md-4">
                            <div class="card card-register">
                                <div class="card-header">
                                    <h4 class="card-title">Sign In</h4>
                                </div>
                                <div class="card-body">
                                    <SignInForm/>
                                </div>
                            </div>
                            <router-link :to="{ name: 'Forgot Password' }" class="text-white">Forgot your password?</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SignInForm from '../../../components/forms/auth/sign-in-form.vue';

export default {
    name: 'SignIn',
    components: {SignInForm}
}
</script>
