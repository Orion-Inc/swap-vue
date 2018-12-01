<template>
<div class="hero is-light-grey is-fullheight">
    <div class="navbar-wrapper">
        <div class="hero-head">
            <!-- Nav -->
            <Navbar/>
            <!-- /Nav -->
        </div>
    </div>

    <div id="main-hero" class="hero-body bg-1">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-5 is-offset-1 is-hidden-mobile">
                    <div class="flex-card clean-signup-info padding-20">
                        <h2 class="has-text-centered clean-text">Heading</h2>
                        <div class="feature">
                            <img src="#" alt="image">
                            <div class="feature-text">Lorem ipsum dolor sit amet, cu has blandit intellegat, qui ludus consequuntur ad.</div>
                        </div>
                        <div class="feature">
                            <img src="#" alt="image">
                            <div class="feature-text">Lorem ipsum dolor sit amet, cu has blandit intellegat, qui ludus consequuntur ad.</div>
                        </div>
                        <div class="feature">
                            <img src="#" alt="image">
                            <div class="feature-text">Lorem ipsum dolor sit amet, cu has blandit intellegat, qui ludus consequuntur ad.</div>
                        </div>
                    </div>
                </div>
                <div class="column is-6">
                    <div id="signup-card" class="animated fadeIn">
                        <div class="flex-card clean-signup-card mb-0">
                            <h2 class="has-text-centered pt-0">Sign up</h2>
                            <SignUpForm/>

                            <p class="has-text-centered mt-20">
                                Already have an Account? <a class="no-account primary-text" href="">Sign in</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '../../../components/html/navbar.vue';
import SignUpForm from '../../../components/forms/auth/signup.vue';

export default {
    name: 'SignUp',
    components: {Navbar, SignUpForm}
}
</script>
