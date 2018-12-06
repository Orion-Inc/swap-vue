<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-primary navbar-shadow" color-on-scroll="100">
        <div class="container">
            <div class="navbar-translate">
                <router-link :to="{ name: 'index'}" class="navbar-brand">
                    <img src="../../assets/img/logo-alt.png" alt="Swap logo" height="50px">
                </router-link>
                <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse justify-content-end" id="navigation">
                <div class="navbar-collapse-header">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                            <a>Swap</a>
                        </div>
                        <div class="col-6 collapse-close text-right">
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="tim-icons icon-simple-remove"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <ul class="navbar-nav">
                    <b-nav-item-dropdown text="Username" class="dropdown nav-item" right>
                        <b-dropdown-item :to="{ name: 'My Profile' }"><i class="tim-icons icon-single-02"></i> My Profle</b-dropdown-item>
                        <b-dropdown-item :to="{ name: 'Settings' }"><i class="tim-icons icon-settings-gear-63"></i> Settings</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item :to="{ name: 'Log Out' }"><i class="tim-icons icon-button-power"></i> Logout</b-dropdown-item>
                    </b-nav-item-dropdown>
                </ul>
            </div>
        </div>
    </nav>    
</template>

<script>
export default {
    name: 'Navbar'
}
</script>
<style>
    nav.navbar-shadow {
        box-shadow: 0 4px 18px 0 rgba(0,0,0,.12), 0 7px 10px -5px rgba(0,0,0,.15);
    }

    nav ul.navbar-nav li.dropdown.nav-item a{
        font-weight: 600;
    }
</style>


