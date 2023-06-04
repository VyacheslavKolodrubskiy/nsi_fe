<script setup lang="ts">
import { PageName } from 'shared/enums/common'
</script>

<template>
  <QPage class="column flex-center text-center" padding>
    <QImg
      class="q-mb-lg"
      fit="contain"
      height="279px"
      max-width="400px"
      no-spinner
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
  </QPage>
</template>
