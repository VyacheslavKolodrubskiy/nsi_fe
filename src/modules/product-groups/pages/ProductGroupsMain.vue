<script setup lang="ts">
const state = {
  options: {
    chart: {
      id: 'vuechart-example',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  },
  series: [
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
}
</script>

<template>
  <div>
    <ApexCharts
      :options="state.options"
      :series="state.series"
      type="bar"
      width="500"
    ></ApexCharts>
  </div>
</template>

<style scoped lang="scss"></style>
