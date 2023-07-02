<script setup lang="ts">
import { PageName } from 'shared/enums/common.enum'
</script>

<template>
  <div class="column flex-center q-px-md q-py-lg text-center window-height">
    <BaseIcon height="24" name="logo" width="160" />

    <div class="col column flex-center no-wrap q-my-md">
      <QImg
        class="q-mb-lg"
        fit="contain"
        height="279px"
        max-width="400px"
        no-spinner
        no-transition
        src="src/assets/img/404.png"
      />

      <div class="q-mb-lg text-color-1">
        <div class="q-mb-md" style="font-size: 20px">
          Упс… Мы не можем найти то, что Вы ищете
        </div>

        <div>
          Так уж получилось, что из множества страниц нашего сайта Вы оказались
          как раз на той, <br />
          которая уже не существует…
        </div>
      </div>

      <QBtn
        color="primary"
        label="На главную"
        @click="$router.push({ name: PageName.MAIN })"
      />
    </div>

    <div class="text-color-2" style="font-size: 13px">
      © 2023 Mechta. Все права защищены.
    </div>
  </div>
</template>
