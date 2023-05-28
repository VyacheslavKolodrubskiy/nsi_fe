<script setup lang="ts">
interface Props {
  name: string
  prefix?: string
  color?: string
  width?: string | number
  height?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
  color: 'currentColor',
  width: '30px',
  height: '30px',
})

const symbolId = computed(() => {
  return `#${props.prefix}-${props.name}`
})
</script>

<template>
  <svg
    aria-hidden="true"
    :style="{ width: width, height: height }"
  >
    <use
      :fill="color"
      :href="symbolId"
    />
  </svg>
</template>
