<script setup lang="ts">
import Icon from '@/shared/ui/Icon.vue';

    const props = defineProps({
        isMobile: {
            type: Boolean,
            required: true
        },
    })

    
</script>

<template>
    <div class="logo">
        <Icon :iconVariant="'logo'"/>
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
    user-select: none;
    cursor: pointer;

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