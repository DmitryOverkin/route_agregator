<script setup lang="ts">
import Button from '@/shared/ui/Button.vue';
import RaceDate from './RaceCard/RaceDate.vue';
import RaceStatus from './RaceCard/RaceStatus.vue';

import RouteImg from '@/assets/icons/route.png';
import StartPlaceImg from '@/assets/icons/start-place.png';


</script>

<template>
    <div class="race-card">
        <div class="race-card__top">
            <RaceDate />
            <RaceStatus />
        </div>
        <div class="race-card__text">
            <h3 class="race-card__title">Рассвет вдоль Яудзы</h3>
            <p class="race-card__description">Спокойный маршрут вдоль воды и парков. Утро без спешки.</p>
        </div>
        <div class="race-card__distance">
            <img :src="RouteImg" alt="">
            <span>24 км</span>
            <RaceStatus />
        </div>
        <div class="race-card__place"><img :src="StartPlaceImg" alt=""/>Ростокинский акведук</div>
        <div class="race-card__btns">
            <Button variant="edit">Редактировать</Button>
            <Button variant="delete"></Button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.race-card{
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 100%;
    height: 100%;
    max-height: 358px;
    max-width: 386px;
    padding: 22px;
    padding-bottom: 33px;
    border: 1px solid $border;
    border-radius: $radius-18;
    background-color: $surface;
   
    &__top{
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin-bottom: 18px;
    }

    &__text{
        text-align: left;
    }

    &__title{
        font-family: $font-grotesk;
        font-size: $title;
        font-weight: 400;
        margin-bottom: $space-8;
        color: $text-primary;
    }

    &__description{
        font-size: $label;
        color: $text-secondary;
    }

    &__distance{
        display: flex;
        align-items: center;
        gap: $space-8;
        img{
            display: inline-block;
        }
        span{
            display: inline-block;
            font-size: $label;
            color: $text-secondary;
        }
    }

    &__place{
        display: flex;
        align-items: center;
        gap: $space-8;
        color: $text-secondary;
        font-size: $caption;
    }

    &__btns{
        @include flex-between;
        width: 100%;
        padding-top: 14px;
        border-top: 1px solid $border;
        gap: $space-8;
    }
}
</style>