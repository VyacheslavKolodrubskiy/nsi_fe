<script setup lang="ts">
import { PageName } from 'shared/enums/common.enum'
</script>

<template>
  <QHeader
    class="bg-white q-py-sm q-px-lg"
    style="border-radius: 0px 0px 10px 10px"
  >
    <QToolbar>
      <div class="flex items-center">
        <RouterLink class="q-mr-xl" :to="{ name: PageName.MAIN }">
          <BaseIcon height="24" name="logo" width="160" />
        </RouterLink>
      </div>

      <QSpace />

      <UserProfileDropdown />
    </QToolbar>
  </QHeader>
</template>
