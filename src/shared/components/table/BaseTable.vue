<script setup lang="ts">
import { QPaginationProps, QTableProps, QTableSlots } from 'quasar'

withDefaults(defineProps<QTableProps & QPaginationProps>(), {
  rowKey: 'id',
})

const emit = defineEmits(['update:model-value'])
</script>

<template>
  <QTable
    :columns="columns"
    :filter="filter"
    flat
    :row-key="rowKey"
    :rows="rows"
    :rows-per-page-options="[]"
    table-header-class="text-color-2"
  >
    <template
      v-for="(_, name) in ($slots as Readonly<QTableSlots>)"
      :key="name"
      #[name]="slotData"
    >
      <slot :name="name" v-bind="{ ...slotData }" />
    </template>

    <template #bottom>
      <QPagination
        active-color="primary"
        active-text-color="white"
        color="color-1"
        direction-links
        gutter="sm"
        :max="max"
        :max-pages="maxPages"
        :model-value="modelValue"
        outline
        push
        :ripple="false"
        rounded
        size="15px"
        unelevated
        @update:model-value="emit('update:model-value', $event)"
      />
    </template>
  </QTable>
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
