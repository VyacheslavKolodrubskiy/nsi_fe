<script setup lang="ts">
import { PageName } from 'shared/enums/common'

const menuLinks: {
  title: string
  icon: string
  route: {
    name: PageName
  }
}[] = [
  {
    title: 'Дашборд',
    icon: 'dashboard',
    route: {
      name: PageName.DASHBOARD_MAIN,
    },
  },
  {
    title: 'Каталог',
    icon: 'catalog',
    route: {
      name: PageName.CATALOG_MAIN,
    },
  },
  {
    title: 'Группы товаров',
    icon: 'product-groups',
    route: {
      name: PageName.PRODUCT_GROUPS_MAIN,
    },
  },
  {
    title: 'Категории',
    icon: 'categories',
    route: {
      name: PageName.CATEGORIES_MAIN,
    },
  },
  {
    title: 'Пользователи',
    icon: 'user',
    route: {
      name: PageName.USERS_MAIN,
    },
  },
]
</script>

<template>
  <QList padding>
    <QItem
      v-for="(link, index) in menuLinks"
      :key="index"
      :clickable="false"
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
