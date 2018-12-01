<template>
    <form action="" method="POST" id="signup-form" autocomplete="on" novalidate>
        <div class="field">
            <div class="control has-icons-left">
                <input type="text" name="first_name" class="input is-primary-focus is-medium" placeholder="Enter Your First Name" required data-parsley-required-message="Please Enter Your First Name.">
                <span class="icon is-small is-left">
                    <i class="sl sl-icon-user"></i>
                </span>
            </div>
        </div>
        <div class="field mt-20">
            <div class="control has-icons-left">
                <input type="text" name="other_names" class="input is-primary-focus is-medium" placeholder="Enter Your Other Names" required data-parsley-required-message="Please Enter Your Other Names.">
                <span class="icon is-small is-left">
                    <i class="sl sl-icon-user"></i>
                </span>
            </div>
        </div>
        <div class="field mt-20">
            <div class="control has-icons-left">
                <input type="text" name="username" class="input is-primary-focus is-medium" placeholder="Enter Your Preferred Username" required data-parsley-required-message="Please Enter Your Preferred Username.">
                <span class="icon is-small is-left">
                    <i class="sl sl-icon-emotsmile"></i>
                </span>
            </div>
        </div>
        <div class="field mt-20">
            <div class="control has-icons-left">
                <input type="email" name="email" class="input is-primary-focus is-medium" placeholder="Enter Your Email Address" required data-parsley-required-message="Please Enter Your Email Address.">
                <span class="icon is-small is-left">
                    @
                </span>
            </div>
        </div>
        <div class="field mt-20">
            <div class="control has-icons-left">
                <input type="tel" name="phone_number" class="input is-primary-focus is-medium" placeholder="Enter Your Phone Number" required data-parsley-required-message="Please Enter Your Phone Number.">
                <span class="icon is-small is-left">
                    <i class="sl sl-icon-screen-smartphone"></i>
                </span>
            </div>
        </div>
        <div class="field mt-20">
            <div class="control has-icons-left">
                <input type="password" name="password" class="input is-primary-focus is-medium" placeholder="Enter A Preferred Password" required data-parsley-required-message="Please Enter A Preferred Password.">
                <span class="icon is-small is-left">
                    <i class="sl sl-icon-lock"></i>
                </span>
            </div>
        </div>

        <div class="mt-20">
            <button type="submit" class="button btn-align primary-btn is-fullwidth rounded raised no-lh">Create Account</button>
        </div>
</form>
</template>

<script>
export default {
    name: 'SignUpForm'
}
</script>
