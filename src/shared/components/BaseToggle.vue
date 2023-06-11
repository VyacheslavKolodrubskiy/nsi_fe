<script setup lang="ts">
import { QToggleProps, QToggleSlots } from 'quasar'

const props = defineProps<QToggleProps>()
const emit = defineEmits(['update:model-value'])
</script>

<template>
  <QToggle
    :model-value="modelValue"
    @update:model-value="emit('update:model-value', $event)"
  >
    <template
      v-for="(_, name) in ($slots as Readonly<QToggleSlots>)"
      :key="name"
    >
      <slot :name="name" />
    </template>
  </QToggle>
</template>

<style scoped lang="scss">
.q-toggle {
  &::v-deep {
    .q-toggle__track {
      border-radius: 14px;
      height: 30px;
      width: 60px;
      opacity: 0.12;
      top: calc(50% - 14px);
    }
    .q-toggle__thumb {
      border-radius: 50%;
      height: 20px;
      position: relative;
      width: 20px;
      top: -24px;
    }
  }
}
</style>
