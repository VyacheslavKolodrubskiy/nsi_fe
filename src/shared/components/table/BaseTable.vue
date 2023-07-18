<script setup lang="ts">
import { QTableProps, QTableSlots } from 'quasar'

withDefaults(defineProps<QTableProps>(), {
  rowKey: 'id',
  rowsPerPageOptions: () => [8],
  tableHeaderClass: 'text-color-2',
  selection: 'single',
})
</script>

<template>
  <QTable
    :columns="columns"
    :filter="filter"
    flat
    :row-key="rowKey"
    :rows="rows"
    :rows-per-page-options="rowsPerPageOptions"
    :selection="selection"
    :table-header-class="tableHeaderClass"
  >
    <template
      v-for="(_, name) in ($slots as Readonly<QTableSlots>)"
      :key="name"
      #[name]="slotData"
    >
      <slot :name="name" v-bind="{ ...slotData }" />
    </template>
  </QTable>
</template>

<style scoped lang="scss"></style>
