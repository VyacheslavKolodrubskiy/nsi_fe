<script setup lang="ts">
import { QCheckboxProps, QCheckboxSlots } from 'quasar'
import checkboxCheckedIcon from 'assets/img/icons/checkbox-checked.svg'
import checkboxUncheckedIcon from 'assets/img/icons/checkbox-unchecked.svg'

defineProps<QCheckboxProps>()
const emit = defineEmits(['update:model-value'])
</script>

<template>
  <QCheckbox
    :checked-icon="`img:${checkboxCheckedIcon}`"
    :label="label"
    :model-value="modelValue"
    :unchecked-icon="`img:${checkboxUncheckedIcon}`"
    @update:model-value="emit('update:model-value', $event)"
  >
    <template
      v-for="(_, name) in ($slots as Readonly<QCheckboxSlots>)"
      :key="name"
    >
      <slot :name="name" />
    </template>
  </QCheckbox>
</template>

<style scoped lang="scss">
.q-checkbox :deep(.q-checkbox__inner) {
  &::before {
    display: none;
  }
}
.q-checkbox :deep(.q-checkbox__icon-container) {
  justify-content: center;
}
</style>
