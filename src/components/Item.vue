<template>
    <div class="item">
        <div class="item-image-container">
            <img class="item-image" v-show="item_data.icon != ''" :src="item_data.icon" alt="">
            <svg v-show="item_data.icon == ''" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="item-no-image">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>  
        </div>
        <div class="item-info">
            <div class="item-info-title">{{item_data.name}}</div>
            <div class="item-info-md mt-2">Цена Market CSGO: {{roundValue(item_data.market_price)}}₽</div>
            <div class="item-info-md">Цена Steam: {{roundValue(item_data.steam_price/$store.state.currency.rate)}}{{ $store.state.currency.icon }}</div>
            <div class="item-info-sm">Профит: {{roundValue(item_data.profit/$store.state.currency.rate) }}{{ $store.state.currency.icon }}</div>
            <div class="item-info-url">
                <a :href="'https://market.csgo.com/' + item_data.name" class="item-info-url-link">
                    Market CS:GO
                </a>
                <a :href="'https://steamcommunity.com/market/listings/730/' + item_data.name" class="item-info-url-link">
                    Steam
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Item',
    props: {
        item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        roundValue(value) {
            return Math.round(( value ) * 100 ) / 100
        }
    }
    
}
</script>

<style lang="scss">
.item {
    @apply p-5 flex flex-col sm:flex-row hover:shadow-lg hover:shadow-slate-900 transition-all bg-slate-900 rounded-3xl w-11/12 sm:w-3/4 xl:w-3/5 mx-auto mt-10 border border-slate-600 last:mb-10;
}

.item-image-container {
    @apply bg-slate-950 p-5 rounded-xl min-w-full min-h-fit sm:min-w-52 sm:min-h-52 sm:size-52 flex justify-center items-center border border-slate-600;
}

.item-image {
    @apply size-fit;
}

.item-no-image {
    @apply w-8 h-8 stroke-slate-600;
}

.item-info {
    @apply mt-4 sm:mt-0 sm:ml-6 flex flex-col;
}

.item-info-title {
    @apply item-info-text font-semibold text-3xl text-white;
}

.item-info-md {
    @apply item-info-text font-medium text-slate-200;
}

.item-info-sm {
    @apply item-info-text font-normal text-slate-300;
}

.item-info-text {
    @apply font-inter;
}

.item-info-url {
    @apply flex mt-4 sm:mt-auto flex-row sm:flex-col justify-between ;
}

.item-info-url-link {
    @apply font-inter font-bold text-slate-300 hover:text-white text-left max-w-fit transition-all;
}
</style>