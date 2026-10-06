<script setup lang="ts">
</script>

<template>
    <div>
        <h2 class="main-text__title">Ближайшие заезды</h2>
        <p class="main-text__description">Маршруты отсортированы по дате старта. Прошедшие остаются в офише.</p>
    </div>
</template>

<style scoped lang="scss">
.main-text {
    &__title {
        font-family: $font-grotesk;
        font-weight: 500;
        font-size: 36px;
    }

    &__description {
        color: $text-secondary;
    }
}

</style>