<template>
    <div>
        <input type="number" id="field" class="input-field" :value="value" @input="updateValue">
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