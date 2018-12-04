<template>
    <div class="">
        <Navbar/>
        <div class="wrapper">
            <div class="page-header">
                <div class="content">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3">
                                <Sidebar/>
                            </div>
                            <div class="col-lg-9">
                                <router-view></router-view>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../html/dashboard-navbar.vue';
import Sidebar from '../html/dashboard-sidebar.vue';

export default {
    name: 'Dashboard',
    components: {Navbar, Sidebar}
}
</script>
