<script setup lang="ts">
import { computed } from 'vue';
import { ButtonType } from '../../types';

import primaryButton from "@/assets/button-plus-black.png";

const props = defineProps<{type?: ButtonType}>()


const type = computed(() => props.type ?? ButtonType.Primary);

const imgByType: Record<ButtonType, string> = {
    [ButtonType.Primary]: primaryButton,
}

const imgSource = computed(() => imgByType[type.value]);
</script>

<template>
    <button class="button">
        <img :src="imgSource"/>
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
    .button {
        @include flex-center;
        gap: $space-8;
        width: 100%;
        height: 47px;
        max-width: 205px;
        border-radius: $radius-12;
        border: 1px solid $accent;

        background-color: $accent;

        font-size: $button-text;
        font-weight: bold;
        user-select: none;
        transition: background-color 0.3s ease-in-out;

        cursor: pointer;

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

    
</style>