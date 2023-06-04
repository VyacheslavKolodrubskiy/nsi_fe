<script setup lang="ts">
import { QSelectProps, QSelectSlots } from 'quasar'

const props = defineProps<QSelectProps>()
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <QSelect
    bg-color="white"
    class="base-select"
    color="color-3"
    dropdown-icon="expand_more"
    :label="label"
    label-color="color-1"
    :model-value="modelValue"
    :options="options"
    options-selected-class="text-color-1"
    outlined
    popup-content-class="popup-styled"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <!-- <template #append>
      <QIcon color="color-1" name="expand_more" />
    </template> -->

    <template
      v-for="(_, name) in ($slots as Readonly<QSelectSlots>)"
      :key="name"
      #[name]="slotData"
    >
      <slot :name="name" v-bind="{ ...slotData }" />
    </template>
  </QSelect>
</template>

<style lang="scss">
.base-select {
  .q-select__dropdown-icon {
    color: $color-1;
  }
}

.popup-styled {
  scrollbar-width: thin;
  scrollbar-color: $color-1 $bg-color;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: $bg-color;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $color-1;
    border-radius: 100px;
    border: 3px solid $bg-color;
  }
}
</style>
