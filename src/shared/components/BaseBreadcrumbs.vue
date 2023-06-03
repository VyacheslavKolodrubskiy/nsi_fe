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
  <QBreadcrumbs class="q-mb-lg">
    <template #separator>
      <svg
        class="flex"
        fill="none"
        height="4"
        viewBox="0 0 4 4"
        width="4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill="#7F8A94" height="4" rx="2" width="4" />
      </svg>
    </template>

    <QBreadcrumbsEl
      v-for="breadcrumb in breadcrumbs"
      :key="breadcrumb.label"
      class="text-color2"
      :label="breadcrumb.label"
      style="font-size: 13px"
      :to="breadcrumb.to"
    />
  </QBreadcrumbs>
</template>
