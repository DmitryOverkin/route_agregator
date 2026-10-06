<script setup lang="ts">

</script>

<template>
    <div class="race-date">
        <span class="race-date__day">29</span><br/>
        <span class="race-date__month">AВГ</span>
    </div>
</template>

<style scoped lang="scss">
.race-date{
    width: 100%;
    height: 100%;
    max-height: 62px;
    max-width: 62px;
    text-align: center;
    padding: 9.5px 16px;
    padding-bottom: 33px;
    border-radius: $radius-12;
    background-color: $accent-soft;
    color: $accent;

    &__day{
        font-family: $font-grotesk;
        font-size: 26px;
        font-weight: bold;
        line-height: 1em;
    }

    &__month{
        font-size: $little;
    }
   
}
</style>