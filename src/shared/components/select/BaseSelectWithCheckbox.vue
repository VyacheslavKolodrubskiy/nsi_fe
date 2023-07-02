<script setup lang="ts">
import { QSelectProps, QSelectSlots } from 'quasar'

defineProps<QSelectProps>()
const emit = defineEmits(['update:model-value'])
</script>

<template>
  <QSelect
    color="color-3"
    dropdown-icon="expand_more"
    :label="label"
    label-color="color-1"
    :model-value="modelValue"
    :options="options"
    outlined
    popup-content-class="custom-scrollbar"
    @update:model-value="emit('update:model-value', $event)"
  >
    <template
      v-for="(_, name) in ($slots as Readonly<QSelectSlots>)"
      :key="name"
      #[name]="slotData"
    >
      <slot :name="name" v-bind="{ ...slotData }" />
    </template>

    <template v-slot:option="{ opt, selected, toggleOption }">
      <div class="cursor-pointer flex items-center" @click="toggleOption(opt)">
        <QCheckbox :model-value="selected" />

        <div>{{ opt.label }}</div>
      </div>
    </template>
  </QSelect>
</template>

<style scoped lang="scss">
.q-select :deep(.q-select__dropdown-icon) {
  color: $color-1;
}
</style>
