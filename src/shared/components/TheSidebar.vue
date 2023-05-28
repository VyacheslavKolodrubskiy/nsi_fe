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
    :mini="!drawer || miniState"
    show-if-above
    style="background-color: #f2f3f3"
    @click.capture="drawerClick"
  >
    <QScrollArea
      class="fit"
      :horizontal-thumb-style="{ opacity: '0' }"
    >
      <SidebarMenu />

      <div class="q-mini-drawer-hide absolute-bottom-left">
        <QBtn
          color="accent"
          dense
          icon="chevron_left"
          label="Свернуть"
          unelevated
          @click="miniState = true"
        />
      </div>
    </QScrollArea>
  </QDrawer>
</template>
