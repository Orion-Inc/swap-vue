<template>
    <div>1</div>
</template>

<script>

export default {
    name: 'LogOut',
    created(){
        this.$store.dispatch('LOGOUT')
        .then( response => {
            this.$router.push({ name: 'Sign In' })
        })
    }
}
</script>
