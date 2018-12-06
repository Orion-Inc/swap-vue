<template>
    <form class="form" action="#" @submit.prevent="signup">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><font-awesome-icon :icon="['far', 'user']" /></span>
            </div>
            <input type="text" class="form-control" placeholder="First Name" v-model="firstname">
        </div>

        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><font-awesome-icon :icon="['far', 'user']" /></span>
            </div>
            <input type="text" class="form-control" placeholder="Other Names" v-model="othernames">
        </div>

        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><font-awesome-icon :icon="['far', 'user-circle']" /></span>
            </div>
            <input type="text" class="form-control" placeholder="Choose A Username" v-model="username">
        </div>

        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><font-awesome-icon :icon="['fas', 'at']" /></span>
            </div>
            <input type="email" class="form-control" placeholder="Email Address" v-model="email">
        </div>

        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><font-awesome-icon :icon="['fas', 'mobile-alt']" /></span>
            </div>
            <input type="tel" class="form-control" placeholder="Phone Number" v-model="phone">
        </div>

        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><font-awesome-icon :icon="['fas', 'lock']" /></span>
            </div>
            <input type="password" class="form-control" placeholder="Provide A Password" v-model="password">
        </div>
        
        <div class="text-center">
            <button type="submit" class="btn btn-primary">Sign up</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'SignUpForm',
    data() {
        return {
            firstname: '',
            othernames: '',
            username: '',
            email: '',
            phone: '',
            password: ''
        }
    },
    methods: {
        signup (){
            this.$store.dispatch('REGISTER', {
                firstname: this.firstname,
                othername: this.othernames,
                username: this.username,
                email: this.email,
                phone: this.phone,
                password: this.password
            }).then( response => {
                this.$router.push({ name: 'Sign In' })
            })
        }

    }
}
</script>
