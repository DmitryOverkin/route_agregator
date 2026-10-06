<script setup lang="ts">
import sortIcon from '@/assets/icons/sort.png';

</script>

<template>
    <div class="sort">
        <img :src="sortIcon" alt="">
        <div class="sort__text">
            По ближайшей дате · 4 маршрута
        </div>
    </div>

</template>

<style scoped lang="scss">
.sort{
    width: 100%;
    height: 100%;
    max-height: 34px;
    max-width: 229px;
    @include flex-center;
    padding:$space-12;
    border: 1px solid $border;
    border-radius: $radius-18;
    background-color: $surface;
    gap: $space-8;

    color: $text-secondary;

    &__text {
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;
        color: $text-secondary;
        font-size: 11px;
        text-wrap: nowrap;
    }
}
</style>