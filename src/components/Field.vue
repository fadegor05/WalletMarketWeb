<template>
    <div class="flex">
        <div class="mx-auto flex flex-col mt-10 ">
        <label class="font-inter text-lg text-white">Сумма, ₽</label>
        <input type="number" class="mt-1 w-96 p-4 border rounded-lg font-inter text-base hover:shadow-lg hover:shadow-zinc-800 transition-all focus:ring-blue-500 focus:border-blue-500 bg-zinc-800 border-zinc-600 placeholder-zinc-400 text-white" :value="value" @input="updateValue">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItemList',
    data() {
        return {
            value: null
        }
    },
    methods: {
        updateValue(event) {
            this.value = event.target.value;
        }
    },
}
</script>