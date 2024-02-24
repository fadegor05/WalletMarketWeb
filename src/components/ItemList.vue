<template>
    <div>
        <div v-for="item in items" class="">
            <img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak_head_shot_holo_light_large.85be84ba7c07917493b8e8a66c9d95c928ebe8b6.png" alt="">
            <div class="information">
                <div class="name">{{ item.name }}</div>
                <div class="market-price">{{ item.market_price }}₽</div>
                <div class="steam-price">{{ item.steam_price }}₽</div>
                <div class="profit">~{{item.profit}}₽</div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItemList',
    data() {
        return {
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