<template>
    <div>
        <div class="row">
            <div class="col-lg-12 px-2 py-2">
                <div class="card">
                    <div class="card-body">
                        <PostAdForm/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// require('../../../../assets/css/cryptofont.min.css');
import PostAdForm from '../../../../components/forms/trade/post-ad-form.vue';

export default {
    name: 'PostAd',
    components: {PostAdForm}
}
</script>
