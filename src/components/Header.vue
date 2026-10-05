<script setup lang="ts">
import { computed } from 'vue';
import useWindowWidth from '../composables/useWindowWidth.ts';
import Logo from './Logo.vue';
import Button from '../shared/ui/Button.vue';


const { windowWidth } = useWindowWidth();

const isMobile = computed<boolean>(() => windowWidth.value < 768)

</script>

<template>
    <header class="header">
        <Logo :logoVariant="'logo'" :isMobile="isMobile"/>
        <Button :variant="'primary'" :disabled="false" :isMobile="isMobile">
            Добавить маршрут
        </Button>
    </header>
</template>

<style scoped lang="scss"> 
.header {
    @include flex-between;
    width: 100%;
  
    height: 72px;
    padding: 0 $space-24;

    border-bottom: 1px solid $border;
    border-bottom-left-radius: $radius-12;
    border-bottom-right-radius : $radius-12;
}
</style>