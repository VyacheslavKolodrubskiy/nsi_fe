<script setup lang="ts">
import { Pages } from 'shared/enums/common'

const menuLinks: {
  title: string
  route: {
    name: Pages
  }
}[] = [
  {
    title: 'Личный кабинет',
    route: {
      name: Pages.PROFILE,
    },
  },
  {
    title: 'Выход',
    route: {
      name: Pages.AUTH,
    },
  },
]
</script>

<template>
  <QBtnDropdown
    color="black"
    dropdown-icon="expand_more"
    flat
    :ripple="false"
  >
    <template #label>
      <QAvatar
        rounded
        size="50px"
      >
        <img src="src/assets/user.png" />
      </QAvatar>

      <div class="text-black q-ml-sm">Марина Кравец</div>
    </template>

    <QList class="text-center">
      <QItem
        v-for="(link, index) in menuLinks"
        :key="index"
        v-close-popup
        clickable
      >
        <QItemSection>
          <QItemLabel>{{ link.title }}</QItemLabel>
        </QItemSection>
      </QItem>
    </QList>
  </QBtnDropdown>
</template>
