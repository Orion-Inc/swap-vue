<template>
    <div class="wrapper">
        <div class="page-header">
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 offset-lg-4 offset-md-4">
                            <div class="card card-register">
                                <div class="card-header">
                                    <h4 class="card-title">Forgot Password</h4>
                                </div>
                                <div class="card-body">
                                    <ForgotPasswordForm/>
                                </div>
                            </div>
                            <router-link :to="{ name: 'Sign In' }" class="text-white">Back to Sign In</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ForgotPasswordForm from '../../../components/forms/auth/forgot-password-form.vue';

export default {
    name: 'ForgotPassword',
    components: {ForgotPasswordForm}
}
</script>
