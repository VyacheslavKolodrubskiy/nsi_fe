<script setup lang="ts">
import { useAppStore } from 'stores/app.store'

const { toggleSidebar } = useAppStore()
</script>

<template>
  <QFooter class="bg-transparent flex items-center justify-between q-py-lg">
    <div class="cursor-pointer flex items-center" @click="toggleSidebar">
      <div
        class="flex flex-center"
        style="
          border: 1px solid #dce0e3;
          border-radius: 10px;
          width: 50px;
          height: 50px;
        "
      >
        <BaseIcon name="arrow-left" />
      </div>

      <div class="q-ml-sm text-color-1">Свернуть</div>
    </div>

    <div class="text-color-2" style="font-size: 13px">
      © 2023 Mechta. Все права защищены.
    </div>
  </QFooter>
</template>
