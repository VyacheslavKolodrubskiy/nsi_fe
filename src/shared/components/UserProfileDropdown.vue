<script setup lang="ts">
import { PageName } from 'shared/enums/common.enum'
import { useAuthStore } from '../../modules/auth/auth.store'
import userImg from 'assets/img/user.png'

interface Link {
  title: string
  route: {
    name: PageName
  }
  logout?: () => void
}

const authStore = useAuthStore()

const menuLinks: Link[] = [
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
    logout: () => authStore.logout(),
  },
]
</script>

<template>
  <QBtnDropdown
    color="black"
    dropdown-icon="expand_more"
    flat
    no-caps
    :ripple="false"
  >
    <template #label>
      <QAvatar rounded size="50px">
        <QImg fit="contain" no-spinner no-transition :src="userImg" />
      </QAvatar>

      <div class="q-ml-sm text-black">Марина Кравец</div>
    </template>

    <QList class="text-center">
      <QItem
        v-for="(link, index) in menuLinks"
        :key="index"
        v-close-popup
        clickable
        :to="{ name: link.route.name }"
        @click="link.logout && link.logout()"
      >
        <QItemSection>
          <QItemLabel>{{ link.title }}</QItemLabel>
        </QItemSection>
      </QItem>
    </QList>
  </QBtnDropdown>
</template>
