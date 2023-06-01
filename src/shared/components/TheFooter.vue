<script setup lang="ts">
import { useAppStore } from '../../stores/app.store'

const { toggleSidebar } = useAppStore()
</script>

<template>
  <QFooter class="bg-transparent q-py-lg flex items-center justify-between">
    <div class="flex items-center cursor-pointer" @click="toggleSidebar">
      <div
        class="flex flex-center"
        style="
          border: 1px solid #dce0e3;
          border-radius: 10px;
          width: 50px;
          height: 50px;
        "
      >
        <SvgIcon name="arrow-left" />
      </div>

      <div class="q-ml-sm">Свернуть</div>
    </div>

    <div style="font-size: 13px; color: #7f8a94">
      © 2023 Mechta. Все права защищены.
    </div>
  </QFooter>
</template>
