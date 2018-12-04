<template>
    <div>
        <div class="row">
            <div class="col-lg-12 px-2 py-2">
                <div class="card">
                    <buySellNav/>
                    <div class="card-body">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import buySellNav from '../../../misc/buySellNav';

export default {
    name: 'Buy',
    components: { buySellNav }
}
</script>
