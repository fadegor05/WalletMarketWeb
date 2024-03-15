<script setup>
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import currencies from '../currencies.json'
</script>

<template>
    <div class="flex flex-col mt-2 md:mt-0 md:ml-2">
        <Listbox :defaultValue="$store.state.currency" v-model="SelectedCurrency" @update:model-value="updateCurrency">
            <ListboxButton class="currency" v-slot="{ value }">{{ getComputedCurrency(value) }}</ListboxButton>
            <ListboxOptions class="flex-col">
                <ListboxOption v-show="currency.code != $store.state.currency.code" class="currency mt-2" v-for="currency in currencies.currencies" :value="currency">{{ getComputedCurrency(currency) }}</ListboxOption>
            </ListboxOptions>
        </Listbox>
    </div>
</template>

<script>
export default {
    name: 'Currency',
    methods: {
        getComputedCurrency(currency) {
            return currency.code + ", " + currency.icon
        },
        updateCurrency(currency) {
            this.$store.state.currency = currency
        }
    }
}
</script>

<style>
.currency {
    @apply cursor-pointer flex justify-center items-center max-h-16 h-16 mx-auto w-full md:w-24 md:min-w-24 p-4 border rounded-lg font-inter text-base hover:shadow-lg hover:shadow-slate-900 bg-slate-900 transition-all border-slate-600 placeholder-slate-400 text-white;
}
</style>