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
                                    <h4 class="card-title">Reset Password</h4>
                                </div>
                                <div class="card-body">
                                    <ResetPasswordForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ResetPasswordForm from '../../../components/forms/auth/reset-password-form.vue';

export default {
    name: 'ResetPassword',
    components: {ResetPasswordForm}
}
</script>
