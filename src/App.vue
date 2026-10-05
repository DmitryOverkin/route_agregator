<script setup lang="ts">
import { computed } from 'vue';
import Header from './components/Header.vue';
import useWindowWidth from './composables/useWindowWidth.ts';
import PageContainer from './layouts/PageContainer.vue';
import Banner from './components/Banner.vue';

const { windowWidth } = useWindowWidth();

const isMobile = computed<boolean>(() => windowWidth.value < 768)

</script>

<template>
  <div class="page">
    <Header />
    <PageContainer>
      <Banner :isMobile="isMobile" />
    </PageContainer>
  </div>
</template>

<style scoped lang="scss">
.page {
  width: 100vw;
  height: 100%;
}
</style>
