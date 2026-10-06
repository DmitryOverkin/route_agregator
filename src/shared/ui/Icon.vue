<script setup lang="ts">

import { computed } from 'vue';
import type { TIcon } from '../../types/index.ts';

import logoImg from '@/assets/icons/logo.png';


    const props = defineProps<{
        iconVariant: TIcon['variant']
    }>();

    const iconImg = computed(() => {
        switch(props.iconVariant) {
            case 'logo':
                return {src: logoImg, alt: 'Логотип сайта человек на велосипеде'};
            // case 'error':
            //     return require('@/assets/error.png');
            // case 'delete':
            //     return require('@/assets/delete.png');
            // case 'edit':
            //     return require('@/assets/edit.png');
            // case 'add':
            //     return require('@/assets/add.png');
            // case 'db':
            //     return require('@/assets/db.png');
            // case 'unsave':
            //     return require('@/assets/unsave.png');
            default:
                return {src: '', alt: ''};
        }
    })
</script>

<template>
    <div class="icon" :class="`icon--${props.iconVariant}`">
        <img :src="iconImg.src" :alt="iconImg.alt">
    </div>
</template>

<style scoped lang="scss"> 
    .icon {
        @include flex-center;
        width: 40px;
        height: 40px;
        max-width: 40px;
        max-height: 40px;
        border-radius: $radius-12;
        &--logo {
            background-color: $accent-soft;
            border: 1px solid $accent;
        }
    
    &__icon {
        img {
            object-fit: cover;  
        }
    }

}
</style>