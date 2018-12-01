<template>
    <form action="" method="POST" id="reset-password-form" autocomplete="off" novalidate>
        <div class="field">
            <div class="control has-icons-left">
                <input type="email" name="email" class="input is-primary-focus is-medium" placeholder="Enter Your Email Address" required data-parsley-required-message="Please Enter Your Email Address.">
                <span class="icon is-small is-left">
                    <i class="sl sl-icon-user"></i>
                </span>
            </div>
        </div>

        <div class="mt-20">
            <button type="submit" class="button btn-align primary-btn is-fullwidth rounded raised no-lh">Next</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'ForgotPasswordForm'
}
</script>
