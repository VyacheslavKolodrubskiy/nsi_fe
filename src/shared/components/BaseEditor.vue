<script setup lang="ts">
import { QEditorProps, QEditorSlots } from 'quasar'

defineProps<QEditorProps>()
const emit = defineEmits(['update:model-value'])
</script>

<template>
  <QEditor
    min-height="5rem"
    :model-value="modelValue"
    :toolbar="[
      ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
    ]"
    @update:model-value="$emit('update:model-value', $event)"
  >
    <template
      v-for="(_, name) in ($slots as Readonly<QEditorSlots>)"
      :key="name"
    >
      <slot :name="name" />
    </template>
  </QEditor>
</template>

<style scoped lang="scss"></style>
