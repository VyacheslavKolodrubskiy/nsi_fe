<script setup lang="ts">
import { Pages } from 'shared/enums/common'

const menuLinks: {
  title: string
  icon: string
  route: {
    name: Pages
  }
}[] = [
  {
    title: 'Дашборд',
    icon: 'dashboard',
    route: {
      name: Pages.MAIN,
    },
  },
  {
    title: 'Каталог',
    icon: 'catalog',
    route: {
      name: Pages.MAIN,
    },
  },
  {
    title: 'Группы товаров',
    icon: 'product-groups',
    route: {
      name: Pages.MAIN,
    },
  },
]
</script>

<template>
  <QList padding>
    <QItem
      v-for="(link, index) in menuLinks"
      :key="index"
      v-ripple
      clickable
    >
      <QItemSection avatar>
        <SvgIcon :name="link.icon" />
      </QItemSection>

      <QItemSection> {{ link.title }} </QItemSection>
    </QItem>
  </QList>
</template>
