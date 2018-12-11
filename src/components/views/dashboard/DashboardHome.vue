<template>
    <div>
        <div class="row">
            <div class="col-lg-4 col-sm-6 px-2 py-2">
                <div class="card card-stats">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-5 col-md-4">
                                <div class="icon-big text-center">
                                    <i class="cf cf-btc text-bitcoin"></i>
                                </div>
                            </div>
                            <div class="col-7 col-md-8">
                                <div class="numbers">
                                    <p class="card-title">GHS {{ btc.price|toPrecision(3) }} <small>{{ btc.change|toPrecision(3) }}%</small></p>
                                    <p class="card-category">Bitcoin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 px-2 py-2">
                <div class="card card-stats">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-5 col-md-4">
                                <div class="icon-big text-center">
                                    <i class="cf cf-eth text-ethereum"></i>
                                </div>
                            </div>
                            <div class="col-7 col-md-8">
                                <div class="numbers">
                                    <p class="card-title">GHS {{ eth.price|toPrecision(3) }} <small>{{ eth.change|toPrecision(3) }}%</small></p>
                                    <p class="card-category">Ethereum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 px-2 py-2">
                <div class="card card-stats">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-5 col-md-4">
                                <div class="icon-big text-center">
                                    <i class="cf cf-ltc text-litecoin"></i>
                                </div>
                            </div>
                            <div class="col-7 col-md-8">
                                <div class="numbers">
                                    <p class="card-title">GHS {{ ltc.price|toPrecision(3) }} <small>{{ ltc.change|toPrecision(3) }}%</small></p>
                                    <p class="card-category">Litecoin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 px-2 py-2">
                <div class="card">
                    <div class="card-body">
                        
                    </div>
                </div>
            </div>
            <div class="col-lg-6 px-2 py-2">
                <div class="card">
                    <div class="card-body">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
require('../../../assets/css/cryptofont.min.css');

export default {
    name: 'DashboardHome',
    data() {
        return {
            btc: {
                price: 0.00,
                change: 0.00
            },
            eth: {
                price: 0.00,
                change: 0.00
            },
            ltc: {
                price: 0.00,
                change: 0.00
            }
        }
    }
}
</script>
