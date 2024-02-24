<template>
    <div>
        <div v-if="items.length > 0">
            <a href="t.me" v-for="item in items" class="p-5 flex hover:shadow-lg hover:shadow-zinc-800 transition-all bg-zinc-800 rounded-3xl w-3/5 mx-auto mt-10 border border-zinc-600 last:mb-10">
                <div class="bg-zinc-900 p-5 rounded-xl size-52 flex justify-center items-center border border-zinc-600">
                    <img class=" size-fit" src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak_head_shot_holo_light_large.85be84ba7c07917493b8e8a66c9d95c928ebe8b6.png" alt="">
                </div>
                <div class="information ml-6">
                    <div class="font-inter font-semibold text-3xl text-white">{{ item.name }}</div>
                    <div class="font-inter font-medium text-zinc-300">CSGO-Market: {{ item.market_price }}₽</div>
                    <div class="font-inter font-medium text-zinc-300">Steam: {{ item.steam_price }}₽</div>
                    <div class="font-inter font-normal text-zinc-300">Выгода: ~{{item.profit}}₽</div>
                    
                </div>
            </a>
        </div>
        <div v-else class="mx-auto font-inter text-center font-normal mt-40 text-zinc-600 text-md">Пока что здесь довольно пусто...</div>
    </div>
</template>

<script>
export default {
    name: 'ItemList',
    data() {
        return {
            itemss: [

            ],
            items: [
                {
                    name: 'some name',
                    market_price: 42,
                    steam_price: 52,
                    profit: 10
                },
                {
                    name: 'another name',
                    market_price: 53,
                    steam_price: 64,
                    profit: 11
                }
            ]
        }
    }
}
</script>