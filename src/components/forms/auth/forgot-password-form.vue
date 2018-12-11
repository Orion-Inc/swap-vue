<template>
    <form class="form" action="#" @submit.prevent="resetPassword">
        <label class="d-block d-sm-none">Email Address</label>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><font-awesome-icon :icon="['fas', 'at']" /></span>
            </div>
            <input type="email" class="form-control" placeholder="Enter Your Email Address" v-model="email">
        </div>
        <div class="text-center">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
</template>

<script>

export default {
    name: 'ForgotPasswordForm',
    data() {
        return {
            email: ''
        }
    },
    methods: {
        resetPassword (){
            this.$store.dispatch('RECOVER', {
                email: this.email
            }).then( response => {
                this.$router.push({ name: 'Sign In' })
            })
        }

    }
}
</script>
