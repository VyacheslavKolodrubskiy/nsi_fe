<script setup lang="ts">
interface Props {
  name: string
  fill?: string
  width?: string | number
  height?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  fill: 'currentColor',
  width: 30,
  height: 30,
})

const symbolId = computed(() => {
  return new URL(
    `../../assets/img/icons/sprite.svg#${props.name}`,
    import.meta.url
  ).href
})
</script>

<template>
  <svg
    aria-hidden="true"
    :style="{ width: props.width, height: props.height }"
  >
    <use
      :fill="fill"
      :xlink:href="symbolId"
    ></use>
  </svg>
</template>
