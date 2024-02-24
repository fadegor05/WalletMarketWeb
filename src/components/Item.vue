<template>
    <div>
        <a href="t.me" class="p-5 flex hover:shadow-lg hover:shadow-zinc-800 transition-all bg-zinc-800 rounded-3xl w-3/5 mx-auto mt-10 border border-zinc-600 last:mb-10">
            <div class="bg-zinc-900 p-5 rounded-xl size-52 flex justify-center items-center border border-zinc-600">
                <img class=" size-fit" v-show="item_data.icon != ''" :src="item_data.icon" alt="">
                <svg v-show="item_data.icon == ''" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-8 h-8 stroke-zinc-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>  
            </div>
            <div class="information ml-6">
                <div class="font-inter font-semibold text-3xl text-white">{{item_data.name}}</div>
                <div class="font-inter font-medium text-zinc-300">CSGO-Market: {{item_data.market_price}}₽</div>
                <div class="font-inter font-medium text-zinc-300">Steam: {{item_data.steam_price}}₽</div>
                <div class="font-inter font-normal text-zinc-300">Выгода: {{item_data.profit}}₽</div>
                
            </div>
        </a>
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
    }
}
</script>