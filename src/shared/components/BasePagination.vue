<script setup lang="ts">
import { QPaginationProps } from 'quasar'

withDefaults(defineProps<QPaginationProps>(), {
  max: 6,
  size: '15px',
  ripple: false,
  gutter: 'sm',
  activeColor: 'primary',
  activeTextColor: 'white',
  color: 'color-1',
})

const emit = defineEmits(['update:model-value'])
</script>

<template>
  <QPagination
    :active-color="activeColor"
    :active-text-color="activeTextColor"
    :color="color"
    direction-links
    :gutter="gutter"
    :max="max"
    :max-pages="maxPages"
    :model-value="modelValue"
    outline
    push
    :ripple="ripple"
    rounded
    :size="size"
    unelevated
    @update:model-value="emit('update:model-value', $event)"
  />
</template>

<style scoped lang="scss">
.q-pagination :deep(.q-btn-item) {
  min-width: 2em !important;
}
.q-pagination :deep(.q-btn--outline)::before {
  border-color: $color-3;
}
.q-pagination :deep(.q-pagination__content) {
  .q-btn,
  .q-pagination__middle .q-btn {
    &:hover {
      background-color: $color-1 !important;

      &::before {
        border: none !important;
      }
      .q-icon,
      .block {
        color: $bg-color !important;
      }
    }
  }
}
</style>
