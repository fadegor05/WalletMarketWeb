<template>
    <div class="flex">
        <div class="mx-auto flex flex-col mt-10 ">
        <label class="font-inter text-lg text-white">Сумма, ₽</label>
        <input placeholder="100" type="number" class="mt-1 w-96 p-4 border rounded-lg font-inter text-base hover:shadow-lg hover:shadow-zinc-800 transition-all focus:ring-blue-500 focus:border-blue-500 bg-zinc-800 border-zinc-600 placeholder-zinc-400 text-white" :value="$store.state.amount" @input="updateAmount">
        </div>
    </div>
</template>

<script>
import handler from '../handler.js';
export default {
    name: 'Field',
    methods: {
        updateAmount(event) {
            const value = event.target.value
            if (parseFloat(value) >= 1){
                this.$store.state.amount = value;
                handler();
            }
        }
    }
}
</script>