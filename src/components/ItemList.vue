<script setup>
import Item from './Item.vue'
</script>

<template>
    <div>
        <div v-if="items.length > 0">
            <Item v-for="item in items" :item_data="item"></Item>
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