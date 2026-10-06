<script setup lang="ts">
import { computed } from 'vue';
import Header from './components/Header.vue';
import useWindowWidth from './composables/useWindowWidth.ts';
import PageContainer from './layouts/PageContainer.vue';
import MainContent from './layouts/MainContent.vue';
import Banner from './components/Banner.vue';
import MainText from './components/MainContent/MainText.vue';
import Sort from './components/MainContent/Sort.vue';
import RaceCard from './components/MainContent/RaceCard.vue';

const { windowWidth } = useWindowWidth();

const isMobile = computed<boolean>(() => windowWidth.value < 768)

</script>

<template>
  <div class="page">
    <Header />
    <PageContainer>
      <Banner :isMobile="isMobile" />
      <MainContent>
          <div class="main-content__header">
            <MainText />
            <Sort />
          </div>
          <div class="cards">
            <RaceCard />
            <RaceCard />
            <RaceCard />
            <RaceCard />
          </div>
      </MainContent>
    </PageContainer>
  </div>
</template>

<style scoped lang="scss">
.page {
  height: 100%;
}

.main-content__header{
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: $space-24;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: $space-16;
  width: 100%;
  max-width: 792px;
}
</style>
