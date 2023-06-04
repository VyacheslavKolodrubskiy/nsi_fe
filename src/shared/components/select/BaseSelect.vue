<script setup lang="ts">
import { QSelectProps, QSelectSlots } from 'quasar'

const props = defineProps<QSelectProps>()
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <QSelect
    bg-color="white"
    color="color-3"
    dropdown-icon="expand_more"
    :label="label"
    label-color="color-1"
    :model-value="modelValue"
    :options="options"
    options-selected-class="text-color-1"
    outlined
    @update:model-value="emit('update:modelValue', $event)"
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
