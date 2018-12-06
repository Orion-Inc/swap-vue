<template>
    <form class="form" action="#" @submit.prevent="login">
        <div class="form-group">
            <label>Email Address</label>
            <input type="email" class="form-control" placeholder="Enter Email Address" v-model="email">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" placeholder="Enter Your Password" v-model="password">
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
