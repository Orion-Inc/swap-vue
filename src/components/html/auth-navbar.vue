<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-transparent " color-on-scroll="100">
        <div class="container">
            <div class="navbar-translate">
                <router-link :to="{ name: 'index'}" class="navbar-brand">
                    <img src="../../assets/img/logo-alt.png" alt="Swap logo" height="50px"> swap.io
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
                            <a>swap</a>
                        </div>
                        <div class="col-6 collapse-close text-right">
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="tim-icons icon-simple-remove"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <ul class="navbar-nav">
                    <div v-if="$route.name != 'Sign In'">
                        <li class="nav-item">
                            <router-link :to="{ name: 'Sign In' }" class="btn btn-neutral btn-simple">
                                Sign In
                            </router-link>
                        </li>
                    </div>
                    <div v-else>
                        <li class="nav-item">
                            <router-link :to="{ name: 'Sign Up' }" class="btn btn-neutral btn-simple">
                                Sign Up
                            </router-link>
                        </li>
                    </div>
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
