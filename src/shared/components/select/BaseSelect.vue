<script setup lang="ts">
import { QSelectProps, QSelectSlots } from 'quasar'

const props = defineProps<QSelectProps>()
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <QSelect
    bg-color="white"
    color="color-3"
    hide-dropdown-icon
    :label="label"
    label-color="color-1"
    :model-value="modelValue"
    :options="options"
    options-selected-class="text-color-1"
    outlined
    @update:model-value="emit('update:modelValue', $event)"
  >
    <template #append>
      <QIcon color="color-1" name="expand_more" />
    </template>

    <template
      v-for="(_, name) in ($slots as Readonly<QSelectSlots>)"
      :key="name"
      #[name]="slotData"
    >
      <slot :name="name" v-bind="{ ...slotData }" />
    </template>
  </QSelect>
</template>
