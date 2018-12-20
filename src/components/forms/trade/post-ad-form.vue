<template>
    <form class="form" action="#" @submit.prevent="postAd">
        
    </form>
</template>

<script>
export default {
    name: 'PostAdForm',
    data() {
        return {
            
        }
    },
    methods: {
        postAd (){
            this.$store.dispatch('CREATE_AD', {
                
            }).then( response => {
                this.$router.push({ name: '' })
            })
        }

    }
}
</script>
