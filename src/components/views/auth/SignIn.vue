<template>
    <div class="hero is-light-grey is-fullheight">
        <div class="navbar-wrapper navbar-sticky">
            <div class="hero-head">
                <!-- Nav -->
                <Navbar/>
                <!-- /Nav -->
            </div>
        </div>

        <div id="main-hero" class="hero-body bg-1">
            <div class="container has-text-centered">
                <div class="columns is-vcentered mt-20 mb-80">
                    <div class="column is-6 is-offset-3">
                        <!-- Login form -->
                        <div id="login-card" class="animated preFadeIn fadeIn">
                            <div class="flex-card clean-login-card">
                                <h2>Sign in</h2>
                                
                            </div>

                            <p class="has-text-centered mt-30">
                                <a class="no-account  light-text" href="#">Forgot your password?</a>
                            </p>
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
import SignInForm from '../../../components/forms/auth/signin.vue';

export default {
    name: 'SignIn',
    components: {Navbar, SignInForm}
}
</script>
