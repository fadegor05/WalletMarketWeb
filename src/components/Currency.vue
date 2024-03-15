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
    <div>
        <Listbox :defaultValue="$store.state.currency" v-model="SelectedCurrency" @update:model-value="updateCurrency">
            <ListboxButton class="text-white" v-slot="{ value }">{{ getComputedCurrency(value) }}</ListboxButton>
            <ListboxOptions>
                <ListboxOption class="text-white" v-for="currency in currencies.currencies" :value="currency">{{ getComputedCurrency(currency) }}</ListboxOption>
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