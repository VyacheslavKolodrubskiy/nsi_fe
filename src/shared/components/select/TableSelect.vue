<script setup lang="ts">
import { QSelectProps, QSelectSlots } from 'quasar'

interface Props extends QSelectProps {}

const props = withDefaults(defineProps<Props>(), {
  bgColor: 'color-4',
})

const emit = defineEmits(['update:model-value'])

const expanded = ref(false)
</script>

<template>
  <QSelect
    :bg-color="bgColor"
    dense
    hide-dropdown-icon
    :model-value="modelValue"
    :options="options"
    outlined
    @popup-hide="expanded = false"
    @popup-show="expanded = true"
    @update:model-value="emit('update:model-value', $event)"
  >
    <template #append>
      <QIcon
        :class="{ 'rotate-180 ': expanded }"
        color="color-1"
        name="expand_more"
        size="sm"
        style="transition: 0.3s"
      />
    </template>

    <template
      v-for="(_, name) in ($slots as Readonly<QSelectSlots>)"
      :key="name"
      #[name]="slotData"
    >
      <slot :name="name" v-bind="{ ...slotData }" />
    </template>
  </QSelect>
</template>
