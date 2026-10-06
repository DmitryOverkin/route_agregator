<script setup lang="ts">
import Button from '@/shared/ui/Button.vue';

const props = defineProps({
    isMobile: {
        type: Boolean,
        required: true
    },
})

</script>

<template>
    <div class="banner">
        <div class="banner__text">
        <p class="banner__location">AФИША · МОСКВА · ВЫХОДНЫЕ</p>
        <h1 class="banner__title">Город ближе, когда едешь вместе</h1>
        <p class="banner__description">Открытые велопрогулки по выходным. Выбери маршрут по дате, дистанции и темпу — регистрация не нужна.</p>
        <div class="banner__buttons">
            <Button :variant="'primary'" :disabled="false" :isMobile="props.isMobile">
                Добавить маршрут
            </Button>
            <Button :variant="'goto'" :disabled="false" :isMobile="props.isMobile">
                Смотреть заезды
            </Button>
        </div>
        <div class="banner__options">
            <p class="banner__option"><span class="banner__option--number">3</span><span class="banner__option--text">ближайших</span></p>
            <p class="banner__option"><span class="banner__option--number">18-52</span><span class="banner__option--text">километра</span></p>
            <p class="banner__option"><span class="banner__option--number">local</span><span class="banner__option--text">в этом браузере</span></p>
        </div>
        </div>
        <div class="banner__image">
            <div class="banner__image-text"><img src="../assets/banner/image-text-arrow.png" alt=""><span>Следующий старт · 29 августа</span></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .banner {
        margin: 40px 0 64px 0;
        background-image: linear-gradient(to right, #121815, #18211D);
        border-radius: $radius-32;
        border: 1px solid $border;

        display: flex;

        &__text {
            width: 50%;
            display: flex;
            flex-direction: column;
            gap: 22px;
            padding: 39px 48px;

        }

        &__location {
            font-size: $caption;
            color: $accent;
        }

        &__title {
            font-size: $main-heading;
            font-weight: 500;
            font-family: $font-grotesk;
            color: $text-primary;
        }

        &__description {
            font-size: $body;
            color: $text-secondary;
        }

        &__buttons {
            display: flex;
            gap: $space-12;
        }

        &__options{
            display: flex;
            gap: 18px;
        }

        &__option{
            display: flex;
            flex-direction: column;

            &--number {
                color: $text-primary;
                font-size: $logo;
                font-weight: bold;
                font-family: $font-grotesk;
            }

            &--text {
                color: $text-secondary;
                font-size: $little;
            }
        }

        &__image {
            display: flex;
            width: 50%;
            background-image: url('../assets/banner/banner.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-top-right-radius: $radius-32;
            border-bottom-right-radius: $radius-32;

            &-text{
                width: 100%;
                height: 100%;
                max-width: 215px;
                max-height: 34px;
                @include flex-center;
                margin-left: 24px;
                margin-bottom: 24px;
                margin-top: auto;
                gap: $space-8;
                border-radius: $radius-18;
                background-color: $page;
                border: 1px solid $border;
                font-size: 11px;
                z-index: 10;
            }
        }
    }
</style>