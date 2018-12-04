<template>
    <div class="card">
        <div class="card-body">
            <b-list-group>
                <b-list-group-item :to="{ name: 'Dashboard' }"><i class="typcn icon-default typcn-home-outline"></i> Dashboard</b-list-group-item>
                <b-list-group-item :to="{ name: 'New Ad' }"><i class="typcn icon-default typcn-directions"></i> Post Ad</b-list-group-item>
                <b-list-group-item :to="{ name: 'Buy' }"><i class="typcn icon-default typcn-arrow-sync"></i> Buy/Sell</b-list-group-item>
                <b-list-group-item :to="{ name: 'My Wallet' }"><i class="typcn icon-default typcn-briefcase"></i> My Wallet</b-list-group-item>
                <b-list-group-item :to="{ name: 'Settings' }"><i class="typcn icon-default typcn-cog-outline"></i> Settings</b-list-group-item>
            </b-list-group>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>
<style>
    
</style>


