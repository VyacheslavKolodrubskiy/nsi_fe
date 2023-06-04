<script setup lang="ts">
import { useAppStore } from 'stores/app.store'

const drawer = ref(false)
const appStore = useAppStore()
</script>

<template>
  <QDrawer
    v-model="drawer"
    :breakpoint="500"
    class="q-pt-lg"
    :mini="!drawer || appStore.sidebarCollapsed"
    show-if-above
    style="background-color: #f2f3f3"
    :width="200"
  >
    <QScrollArea class="fit" :horizontal-thumb-style="{ opacity: '0' }">
      <SidebarMenu />
    </QScrollArea>
  </QDrawer>
</template>
