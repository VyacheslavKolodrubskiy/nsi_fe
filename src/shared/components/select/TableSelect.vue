<script setup lang="ts">
import { QSelectProps, QSelectSlots } from 'quasar'

interface Props extends QSelectProps {}

const props = withDefaults(defineProps<Props>(), {
  dropdownIcon: 'expand_more',
  bgColor: 'color-4',
})

const emit = defineEmits(['update:model-value'])
</script>

<template>
  <QSelect
    :bg-color="bgColor"
    dense
    :dropdown-icon="dropdownIcon"
    :model-value="modelValue"
    :options="options"
    outlined
    @update:model-value="emit('update:model-value', $event)"
  >
    <template
      v-for="(_, name) in ($slots as Readonly<QSelectSlots>)"
      :key="name"
      #[name]="slotData"
    >
      <slot :name="name" v-bind="{ ...slotData }" />
    </template>
  </QSelect>
</template>
