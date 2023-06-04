<script setup lang="ts">
import { PageName } from 'shared/enums/common.enum'

const menuLinks: {
  title: string
  route: {
    name: PageName
  }
}[] = [
  {
    title: 'Личный кабинет',
    route: {
      name: PageName.PROFILE_MAIN,
    },
  },
  {
    title: 'Выход',
    route: {
      name: PageName.AUTH,
    },
  },
]
</script>

<template>
  <QBtnDropdown color="black" dropdown-icon="expand_more" flat :ripple="false">
    <template #label>
      <QAvatar rounded size="50px">
        <img src="src/assets/img/user.png" />
      </QAvatar>

      <div class="text-black q-ml-sm">Марина Кравец</div>
    </template>

    <QList class="text-center">
      <QItem
        v-for="(link, index) in menuLinks"
        :key="index"
        v-close-popup
        clickable
        :to="{ name: link.route.name }"
      >
        <QItemSection>
          <QItemLabel>{{ link.title }}</QItemLabel>
        </QItemSection>
      </QItem>
    </QList>
  </QBtnDropdown>
</template>
