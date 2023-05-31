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
    >
      <QItemSection>
        <RouterLink
          v-slot="{ isActive }"
          class="flex items-center"
          :to="link.route"
        >
          <div
            class="bg-white flex flex-center"
            :class="{ 'bg-primary': isActive }"
            style="
              background: #ffffff;
              border-radius: 10px;
              width: 50px;
              height: 50px;
            "
          >
            <SvgIcon
              :color="isActive ? 'red' : 'red'"
              :name="link.icon"
            />
          </div>

          <div class="q-ml-sm">{{ link.title }}</div>
        </RouterLink>
      </QItemSection>
    </QItem>
  </QList>
</template>
