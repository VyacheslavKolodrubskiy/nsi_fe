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
    title: 'Dashboard',
    icon: 'mdi-view-dashboard',
    route: {
      name: Pages.MAIN,
    },
  },
  {
    title: 'Dashboard',
    icon: 'mdi-view-dashboard',
    route: {
      name: Pages.MAIN,
    },
  },
  {
    title: 'Dashboard',
    icon: 'mdi-view-dashboard',
    route: {
      name: Pages.MAIN,
    },
  },
]
</script>

<template>
  <SvgIcon name="catalog" />

  <QList padding>
    <QItem
      v-for="(link, index) in menuLinks"
      :key="index"
      v-ripple
      clickable
    >
      <QItemSection avatar>
        <QIcon :name="link.icon" />
      </QItemSection>

      <QItemSection> {{ link.title }} </QItemSection>
    </QItem>
  </QList>
</template>
