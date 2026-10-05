<script setup lang="ts">
import { computed } from 'vue';
import type { TButton } from '../../types/index.ts';

import primaryButtonBlackImg from '@/assets/button/button-plus-black.png';
import primaryButtonDisabledImg from '@/assets/button/button-plus-disabled.png';
import primaryButtonGreenImg from '@/assets/button/button-plus-green.png';
import gotoButtonArrow from '@/assets/button/button-arrow-down.png';



const props = defineProps<{
    variant: TButton['variant'];
    disabled?: boolean;
    isMobile?: boolean;
}>();

const buttonStyle = computed(() => {
    switch (props.variant) {
        case 'primary':
            if (!props.isMobile && props.disabled) return 'primary-disabled';
            if (props.isMobile) return 'primary-mobile';
            return 'primary';
        case 'goto': 
            return 'goto'
        default:
            return '';
    }
})

const buttonImg = computed(() => {
    switch (props.variant) {
        case 'primary':
            if ( !props.isMobile && props.disabled) return primaryButtonDisabledImg;
            if (props.isMobile) return primaryButtonGreenImg;
            return primaryButtonBlackImg;
        case 'goto':
            return gotoButtonArrow
        default:
            return '';
    }
})

</script>

<template>
    <button class="button" :class="buttonStyle" :disabled="props.disabled">
        <img :src="buttonImg"/>
        <span v-if="!props.isMobile"><slot></slot></span>
    </button>
</template>

<style scoped lang="scss">
    .button {
        @include flex-center;
        gap: $space-8;
        width: 100%;
        height: 47px;
        border-radius: $radius-12;


        font-size: $button-text;
        font-weight: bold;
        user-select: none;

        cursor: pointer;

    }

    .primary {
        max-width: 205px;
        background-color: $accent;

        border: 1px solid $accent;

        &:hover {
            background-color: $hover;
            border: 1px solid $hover;
        }

        &:active {
            background-color: $pressed;
            border: 1px solid $pressed;
        }

        &:focus-visible  {
            background-color: $accent;
            outline: none;
            border: 1px solid $text-primary;
        }
    }

      .primary-disabled {
        max-width: 205px;
        background-color: $interactive;
        border: 1px solid $interactive;

        color: $text-muted;

        cursor: not-allowed;
      }

      .primary-mobile {
        border: 1px solid $border;
        background-color: $interactive;
        max-width: 43px;
      }

      .goto{ 
        border: none;
        background-color: transparent;
        color: $text-secondary;
        width: 100%;
        max-width: 194px;
      }

    
</style>