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
      name: Pages.CATALOG,
    },
  },
  {
    title: 'Группы товаров',
    icon: 'product-groups',
    route: {
      name: Pages.PRODUCT_GROUPS,
    },
  },
  {
    title: 'Категории',
    icon: 'categories',
    route: {
      name: Pages.CATEGORIES,
    },
  },
]
</script>

<template>
  <QList padding>
    <QItem
      v-for="(link, index) in menuLinks"
      :key="index"
      :to="link.route"
    >
      <QItemSection
        avatar
        class="bg-white flex flex-center"
        style="border-radius: 10px; padding: 10px"
      >
        <SvgIcon :name="link.icon" />
      </QItemSection>

      <QItemSection class="q-ml-sm"> {{ link.title }} </QItemSection>
    </QItem>
  </QList>
</template>
