<script setup lang="ts">
import { QSelectProps, QSelectSlots } from 'quasar'
import expandMore from 'assets/img/icons/expand-more.svg'

interface Props extends QSelectProps {}

const props = withDefaults(defineProps<Props>(), {
  bgColor: 'color-4',
})

const emit = defineEmits(['update:model-value'])
</script>

<template>
  <QSelect
    :bg-color="bgColor"
    dense
    :dropdown-icon="`img:${expandMore}`"
    label-color="color-1"
    :model-value="modelValue"
    :options="options"
    outlined
    @update:model-value="emit('update:model-value', $event)"
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

<style scoped lang="scss">
.q-field :deep(.q-field__control:before) {
  border: 0;
}
</style>
