<template>
    <div class="title">
        <div class="title-title">
            WalletMarket
        </div>
        <a href="https://github.com/fadegor05/WalletMarketWeb" class="title-subtitle">
            by fadegor05
        </a>
    </div>
</template>

<script>
export default {
    name: 'Title'
}
</script>

<style>
.title {
    @apply flex flex-col;
}

.title-title {
    @apply title-text text-4xl mt-10 font-black text-white;
}

.title-subtitle {
    @apply title-text text-xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-blue-500 via-pink-500 to-blue-500 opacity-90 hover:opacity-100 transition-all;
}

.title-text {
    @apply font-inter mx-auto text-center;
}
</style>