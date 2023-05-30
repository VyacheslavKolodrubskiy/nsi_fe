<script setup lang="ts">
import { PageName } from 'shared/enums/common'
</script>

<template>
  <QHeader
    class="bg-white q-py-md q-px-xl"
    style="border-radius: 0px 0px 10px 10px"
  >
    <QToolbar>
      <div class="row items-center">
        <RouterLink
          class="q-mr-md"
          :to="{ name: PageName.DASHBOARD_MAIN }"
        >
          <LogoIcon />
        </RouterLink>

        <div class="row items-center">
          <div
            class="q-mr-md"
            style="color: #7f8a94"
          >
            Қазақ
          </div>

          <div>Русский</div>
        </div>
      </div>

      <QSpace />

      <UserProfileDropdown />
    </QToolbar>
  </QHeader>
</template>
