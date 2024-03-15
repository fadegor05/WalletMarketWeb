<template>
    <div class="field">
        <label class="field-label">Сумма, ₽</label>
        <input placeholder="100" type="number" class="field-input" :value="$store.state.amount" @input="updateAmount">
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

<style>
.field {
    @apply mx-auto flex flex-col mt-10 w-11/12 sm:w-3/5 md:w-1/2 lg:w-96;
}

.field-label {
    @apply font-inter text-lg text-white;
}

.field-input {
    @apply mt-1 mx-auto min-w-full p-4 border rounded-lg font-inter text-base hover:shadow-lg hover:shadow-slate-900 transition-all focus:ring-blue-500 focus:border-blue-500 bg-slate-900 border-slate-600 placeholder-slate-400 text-white;
}
</style>