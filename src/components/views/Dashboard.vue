<template>
    <div class="">
        <Navbar/>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from '../html/dashboard-navbar.vue';

export default {
    name: 'Dashboard',
    components: {Navbar}
}
</script>
