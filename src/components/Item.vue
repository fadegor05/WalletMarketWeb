<template>
    <div>
        <a href="t.me" class="p-5 flex hover:shadow-lg hover:shadow-zinc-800 transition-all bg-zinc-800 rounded-3xl w-3/5 mx-auto mt-10 border border-zinc-600 last:mb-10">
            <div class="bg-zinc-900 p-5 rounded-xl size-52 flex justify-center items-center border border-zinc-600">
                <img class=" size-fit" src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak_head_shot_holo_light_large.85be84ba7c07917493b8e8a66c9d95c928ebe8b6.png" alt="">
            </div>
            <div class="information ml-6">
                <div class="font-inter font-semibold text-3xl text-white">{{item_data.name}}</div>
                <div class="font-inter font-medium text-zinc-300">CSGO-Market: {{item_data.market_price}}₽</div>
                <div class="font-inter font-medium text-zinc-300">Steam: {{item_data.steam_price}}₽</div>
                <div class="font-inter font-normal text-zinc-300">Выгода: ~{{item_data.profit}}₽</div>
                
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