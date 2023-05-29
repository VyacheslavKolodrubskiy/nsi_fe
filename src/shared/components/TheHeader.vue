<script setup lang="ts">
import { Pages } from 'shared/enums/common'
</script>

<template>
  <QHeader
    class="bg-white q-py-md"
    style="border-radius: 0px 0px 10px 10px"
  >
    <QToolbar>
      <RouterLink :to="{ name: Pages.DASHBOARD_MAIN }">
        <LogoIcon />
      </RouterLink>

      <QSpace />

      <UserProfileDropdown />
    </QToolbar>
  </QHeader>
</template>
