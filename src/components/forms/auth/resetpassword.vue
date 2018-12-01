<template>
    <form action="" method="POST" id="change-password-form" autocomplete="off" novalidate>
        <div class="field">
            <div class="control">
                <input type="password" name="new_passsword" class="input is-primary-focus is-medium" placeholder="Enter Your New Password" required data-parsley-required-message="Please Enter A Preferred Password.">
            </div>
        </div>

        <div class="field mt-20">
            <div class="control">
                <input type="password" name="confirm_password" class="input is-primary-focus is-medium" placeholder="Enter Password Again" required data-parsley-required-message="Please Enter A Password Again.">
            </div>
        </div>

        <div class="mt-20">
            <button type="submit" class="button btn-align primary-btn is-fullwidth rounded raised no-lh">Change Password</button>
        </div>

        <p class="has-text-centered mt-20">
            We promise to keep this safe <i class="sl sl-icon-emotsmile"></i>
        </p>
    </form>
</template>

<script>
export default {
    name: 'ResetPasswordForm'
}
</script>
