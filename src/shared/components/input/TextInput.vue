<script setup lang="ts">
import { QInputProps, QInputSlots } from 'quasar'

const props = defineProps<QInputProps>()
const emit = defineEmits(['update:model-value'])
</script>

<template>
  <QInput
    color="color-3"
    :input-style="{ color: '#39444E' }"
    :label="label"
    label-color="color-2"
    :model-value="modelValue"
    outlined
    type="text"
    @update:model-value="emit('update:model-value', $event)"
  >
    <template
      v-for="(_, name) in ($slots as Readonly<QInputSlots>)"
      :key="name"
    >
      <slot :name="name" />
    </template>
  </QInput>
</template>
