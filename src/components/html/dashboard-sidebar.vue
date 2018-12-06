<template>
    <div class="card">
        <div class="card-body">
            <b-list-group>
                <b-list-group-item :to="{ name: 'Dashboard' }"> Dashboard</b-list-group-item>
                <b-list-group-item :to="{ name: 'New Ad' }"> Post Ad</b-list-group-item>
                <b-list-group-item :to="{ name: 'Buy' }"> Buy/Sell</b-list-group-item>
                <b-list-group-item :to="{ name: 'My Wallet' }"> My Wallet</b-list-group-item>
                <b-list-group-item :to="{ name: 'Settings' }"> Settings</b-list-group-item>
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


