<script setup lang="ts">
import { PageName } from 'shared/enums/common'

const breadcrumbs = [
  {
    label: 'Главная',
    to: { name: PageName.DEFAULT },
  },
  {
    label: 'Личный кабинет',
    to: { name: PageName.DEFAULT },
  },
]
</script>

<template>
  <QLayout view="hhh lpR fff">
    <TheHeader />

    <TheSidebar />

    <QPageContainer>
      <QPage padding>
        <QBreadcrumbs
          active-color="grey"
          class="q-mb-lg"
          separator="."
          separator-color="grey"
        >
          <QBreadcrumbsEl
            v-for="breadcrumb in breadcrumbs"
            :key="breadcrumb.label"
            :label="breadcrumb.label"
            :to="breadcrumb.to"
          />
        </QBreadcrumbs>

        <RouterView />
      </QPage>
    </QPageContainer>
  </QLayout>
</template>
