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
          class="q-mr-xl"
          :to="{ name: PageName.MAIN }"
        >
          <LogoIcon />
        </RouterLink>

        <div class="row items-center">
          <div
            class="q-mr-md cursor-pointer"
            style="color: #7f8a94"
          >
            Қазақ
          </div>

          <div
            class="cursor-pointer"
            style="color: #39444e"
          >
            Русский
          </div>
        </div>
      </div>

      <QSpace />

      <UserProfileDropdown />
    </QToolbar>
  </QHeader>
</template>
