<script setup lang="ts">
import { PageName } from 'shared/enums/common'
</script>

<template>
  <div class="text-center q-py-lg q-px-md column flex-center window-height">
    <SvgIcon height="24" name="logo" width="160" />

    <div class="col q-my-md column no-wrap flex-center">
      <QImg
        class="q-mb-lg"
        fit="contain"
        height="279px"
        max-width="400px"
        no-spinner
        no-transition
        src="src/assets/img/404.png"
      />

      <div class="text-color-1 q-mb-lg">
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
        @click="$router.push({ name: PageName.DEFAULT })"
      />
    </div>

    <div class="text-color-2" style="font-size: 13px">
      © 2023 Mechta. Все права защищены.
    </div>
  </div>
</template>
