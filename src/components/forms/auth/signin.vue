<template>
    <form action="" method="POST" id="signin-form" novalidate>
        <div class="field">
            <div class="control has-icons-left">
                <input type="email" name="email" class="input is-primary-focus is-medium" placeholder="Email Address"  required data-parsley-required-message="Please Enter Your Email Address.">
                <span class="icon is-small is-left">
                    <i class="sl sl-icon-user"></i>
                </span>
            </div>
        </div>

        <div class="field mt-20">
            <div class="control has-icons-left">
                <input type="password" name="password" class="input is-primary-focus is-medium" placeholder="Password" required data-parsley-required-message="Please Enter Your Password.">
                <span class="icon is-small is-left">
                    <i class="sl sl-icon-lock"></i>
                </span>
            </div>
        </div>

        <div class="mt-20">
            <button type="submit" class="button btn-align primary-btn is-fullwidth rounded raised no-lh">Sign in</button>
        </div>

        <p class="has-text-centered mt-20">
            New to Swap? <a class="no-account primary-text" href="">Sign up</a>
        </p>
    </form>
</template>

<script>
export default {
    name: 'SignInForm'
}
</script>
