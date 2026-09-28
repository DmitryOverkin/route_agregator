<script setup lang="ts">
import { computed } from 'vue';
import useWindowWidthMobile from '../composables/useWindowWidthMobile.ts';
import Logo from '../shared/ui/Logo.vue';

const { windowWidth } = useWindowWidthMobile();

const isMobile = computed(() => windowWidth.value < 768)

</script>

<template>
    <header class="header">
        <Logo :isMobile="isMobile"/>
        <button>ryjrg</button>
    </header>
</template>

<style scoped lang="scss"> 
.header {
    @include flex-between;
    width: 100%;
  
    height: 72px;
    padding: 0 $space-24;
}
</style>