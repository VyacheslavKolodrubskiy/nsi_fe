<script setup lang="ts">
import { QInputProps, QInputSlots } from 'quasar'

interface Props extends QInputProps {
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Найти в таблице',
})

const emit = defineEmits(['update:model-value'])
</script>

<template>
  <QInput
    dense
    :model-value="modelValue"
    outlined
    :placeholder="placeholder"
    style="background-color: #f7f7f7"
    type="text"
    @update:model-value="emit('update:model-value', $event)"
  >
    <template #append>
      <SvgIcon height="24" name="search" width="24" />
    </template>

    <template
      v-for="(_, name) in ($slots as Readonly<QInputSlots>)"
      :key="name"
    >
      <slot :name="name" />
    </template>
  </QInput>
</template>
