<template>
    <form class="form" action="#" @submit.prevent="login">
        <label class="d-block d-sm-none">Email Address</label>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><font-awesome-icon :icon="['far', 'user']" /></span>
            </div>
            <input type="email" class="form-control" placeholder="Email Address or Username" v-model="email">
        </div>

        <label class="d-block d-sm-none">Password</label>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><font-awesome-icon :icon="['fas', 'lock']" /></span>
            </div>
            <input type="password" class="form-control" placeholder="Password" v-model="password">
        </div>
        <div class="text-center">
            <button type="submit" class="btn btn-primary">Login</button>
        </div>
    </form>
</template>

<script>

export default {
    name: 'SignInForm',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        login (){
            this.$store.dispatch('AUTHENTICATE', {
                email: this.email,
                password: this.password
            }).then( response => {
                this.$router.push({ name: 'Dashboard' })
            })
        }

    }
}
</script>
