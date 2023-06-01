<script setup lang="ts">
import { useRoute } from 'vue-router'
import { PageName } from 'shared/enums/common'

interface Link {
  title: string
  icon: string
  route: {
    name: PageName
  }
}

const menuLinks: Link[] = [
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

const route = useRoute()

const isActive = computed(() => (routeName: string) => {
  return route.name === routeName
})
</script>

<template>
  <QList class="sidebar-menu">
    <QItem
      v-for="(link, index) in menuLinks"
      :key="index"
      class="q-px-none"
      :clickable="false"
      :to="link.route"
    >
      <QItemSection
        avatar
        class="bg-white flex flex-center"
        :class="{ 'bg-primary-1': isActive(link.route.name) }"
        style="border-radius: 10px; padding: 10px"
      >
        <SvgIcon
          :color="isActive(link.route.name) ? 'white' : '#E61771'"
          :name="link.icon"
        />
      </QItemSection>

      <QItemSection class="q-ml-sm" style="color: #39444e">
        {{ link.title }}
      </QItemSection>
    </QItem>
  </QList>
</template>
