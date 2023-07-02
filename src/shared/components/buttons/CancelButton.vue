<script setup lang="ts">
import { QBtnSlots } from 'quasar'
import { QBtnProps } from 'quasar'

defineProps<QBtnProps>()
</script>

<template>
  <QBtn
    class="rounded-borders"
    color="primary"
    dense
    label="Сохранить"
    no-caps
    style="height: 50px; width: 108px"
  >
    <template v-for="(_, name) in ($slots as Readonly<QBtnSlots>)" :key="name">
      <slot :name="name" />
    </template>
  </QBtn>
</template>

<style scoped lang="scss"></style>
