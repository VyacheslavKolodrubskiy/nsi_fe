<script setup lang="ts">
import { QInputProps } from 'quasar'

const props = withDefaults(defineProps<QInputProps>(), {})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <QInput
    :model-value="modelValue"
    type="password"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>
