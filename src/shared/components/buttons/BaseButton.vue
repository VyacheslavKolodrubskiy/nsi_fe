<script setup lang="ts">
import { QBtnProps, QBtnSlots } from 'quasar'

interface Props extends QBtnProps {
  width?: string | number
  height?: string | number
}

withDefaults(defineProps<Props>(), {
  width: 50,
  height: 108,
})
</script>

<template>
  <QBtn
    class="rounded-borders"
    color="primary"
    dense
    :label="label"
    no-caps
    :outline="outline"
    :style="{ width: `${width}px`, height: `${height}px` }"
    :type="type"
  >
    <template v-for="(_, name) in ($slots as Readonly<QBtnSlots>)" :key="name">
      <slot :name="name" />
    </template>
  </QBtn>
</template>

<style scoped lang="scss"></style>
