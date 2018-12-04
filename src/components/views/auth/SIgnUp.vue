<template>
    <div class="wrapper">
        <div class="page-header">
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-md-5">

                        </div>
                        <div class="col-lg-5 col-md-5">
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
