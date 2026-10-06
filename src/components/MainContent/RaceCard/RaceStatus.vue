<script setup lang="ts">
import StatusStartsImg from '@/assets/icons/status-stars.png';
</script>

<template>
    <div class="race-status">
        <img :src="StatusStartsImg" alt="Status starts">
        <span class="race-status__text">БЛИЖАЙШИЙ</span>
    </div>
</template>

<style scoped lang="scss">
.race-status{
    @include flex-center;
    width: fit-content;
    height: 100%;
    max-height: 28px;
    text-align: center;
    padding: 7.5px 11px;
    background-color: $accent-soft;
    border-radius: $radius-12;
    color: $accent;
    gap: $space-8;

    img{
        display: inline-block;
    }

    &__text{
        display: inline-block;
        font-family: $font-grotesk;
        font-size: $little;
        font-weight: bold;
        line-height: 1em;
    }
}
</style>