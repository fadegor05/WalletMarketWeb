<script setup>
import Title from './components/Title.vue'
import Field from './components/Field.vue'
import ItemList from './components/ItemList.vue'
</script>

<template>
    <div class="root">
        <Title></Title>
        <Field></Field>
        <ItemList></ItemList>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style lang="scss">
body {
    @apply bg-zinc-900;
}

.root {
    @apply flex flex-col;
}
</style>