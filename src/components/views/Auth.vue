<template>
    <div class="bg-1">
        <Navbar/>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from '../html/auth-navbar.vue';

export default {
    name: 'Auth',
    components: {Navbar}
}
</script>

<style>
    .bg-1 {
        background-image: url(../../assets/img/backgrounds/home-bg-1.svg);
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
    }
</style>

