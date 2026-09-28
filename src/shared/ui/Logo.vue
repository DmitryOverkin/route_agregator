<script setup lang="ts">
    const props = defineProps({
        isMobile: {
            type: Boolean,
            required: true
        }
    })
</script>

<template>
    <div class="logo">
        <div class="logo__icon">
            <img src="../../assets/logo.png" alt="Логотип сайта человек на велосипеде">
        </div>
        <div class="logo__text">
            <div class="logo__text-title"><strong>ВелоДень</strong></div>
            <p v-if="!isMobile" class="logo__text-description">городские велопрогулки</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.logo {
    @include flex-center;
    gap: $space-12;
    &__icon {
        @include flex-center;
        width: 40px;
        height: 40px;
        max-width: 40px;
        max-height: 40px;
        background-color: $accent-soft;
        border-radius: $radius-12;
    }
    
    &__icon {
        img {
            object-fit: cover;  
    }
}

    &__text {
        &-title {
            font-size: $logo;
            font-family: $font-grotesk;
            color: $text-primary;
        }
        &-description {
            margin: 0;
            font-weight: 550;
            font-size: $little;
            color: $text-muted;
        }
    }
}
</style>