<script setup lang="ts">
import { QInputProps } from 'quasar'

const props = withDefaults(defineProps<QInputProps>(), {})

const emit = defineEmits(['update:model-value'])
</script>

<template>
  <QInput
    :model-value="modelValue"
    type="password"
    @update:model-value="emit('update:model-value', $event)"
  />
</template>
