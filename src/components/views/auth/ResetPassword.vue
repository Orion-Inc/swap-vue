<template>
    <!-- Hero and nav -->
    <div class="hero is-light-grey is-fullheight">
        <div class="navbar-wrapper navbar-sticky">
            <div class="hero-head">
                <!-- Nav -->
                <Navbar/>
                <!-- /Nav -->
            </div>
        </div>

        <!-- Hero image -->
        <div id="main-hero" class="hero-body bg-1">
            <div class="container has-text-centered">
                <div class="columns is-vcentered mt-40 mb-80">
                    <div class="column is-6 is-offset-3">
                        <!-- Login form -->
                        <div id="login-card" class="animated preFadeIn fadeIn">
                            <div class="flex-card clean-login-card">
                                <h2>Change Password</h2>
                                <ResetPasswordForm/>
                            </div>
                        </div>
                        <!-- /Login form -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../../../components/html/navbar.vue';
import ResetPasswordForm from '../../../components/forms/auth/resetpassword.vue';

export default {
    name: 'ResetPassword',
    components: {Navbar, ResetPasswordForm}
}
</script>
