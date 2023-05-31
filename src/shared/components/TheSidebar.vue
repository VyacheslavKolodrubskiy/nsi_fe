<script setup lang="ts">
const drawer = ref(false)
const miniState = ref(false)

const drawerClick = (e: Event) => {
  if (miniState.value) {
    miniState.value = false

    // notice we have registered an event with capture flag;
    // we need to stop further propagation as this click is
    // intended for switching drawer to "normal" mode only
    e.stopPropagation()
  }
}
</script>

<template>
  <QDrawer
    v-model="drawer"
    :breakpoint="500"
    class="q-pt-lg"
    :mini="!drawer || miniState"
    show-if-above
    style="background-color: #f2f3f3"
    :width="200"
    @click.capture="drawerClick"
  >
    <QScrollArea
      class="fit"
      :horizontal-thumb-style="{ opacity: '0' }"
    >
      <SidebarMenu />
    </QScrollArea>
  </QDrawer>
</template>
