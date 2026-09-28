<script setup lang="ts">
import Header from './components/Header.vue';
import PageContainer from './layouts/PageContainer.vue';


</script>

<template>
  <div class="page">
    <Header />
    <PageContainer>

    </PageContainer>
  </div>
</template>

<style scoped lang="scss">
.page {
  width: 100vw;
  height: 100%;
  background-color: $page;
}
</style>
