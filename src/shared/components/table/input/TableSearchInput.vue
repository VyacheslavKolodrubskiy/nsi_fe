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
    bg-color="color-4"
    :debounce="600"
    dense
    :model-value="modelValue"
    outlined
    :placeholder="placeholder"
    type="text"
    @update:model-value="emit('update:model-value', $event)"
  >
    <template #append>
      <BaseIcon v-if="!modelValue" height="24" name="search" width="24" />

      <QIcon
        v-else
        class="cursor-pointer"
        name="clear"
        @click="emit('update:model-value', '')"
      />
    </template>

    <template
      v-for="(_, name) in ($slots as Readonly<QInputSlots>)"
      :key="name"
    >
      <slot :name="name" />
    </template>
  </QInput>
</template>

<style scoped lang="scss">
.q-field :deep(.q-field__control:before) {
  border: 0;
}
</style>
