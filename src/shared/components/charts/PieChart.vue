<script setup lang="ts">
import { ApexOptions } from 'apexcharts'

const chartOptions: ApexOptions = {
  series: [44, 55, 13, 43],
  colors: ['#E61771', '#0075CD', '#B20087', '#39C2C9'],
  dataLabels: {
    enabled: false,
  },
  labels: ['Новых товаров', 'В работе', 'Опубликовано', 'На доработке'],
  legend: {
    labels: {
      colors: ['#39444E'],
    },
    markers: {
      radius: 6,
      width: 24,
      height: 24,
    },
    position: 'right',
    offsetY: 50,
  },
}
</script>

<template>
  <ApexChart
    :height="250"
    :options="chartOptions"
    :series="chartOptions.series"
    type="pie"
    width="100%"
  />
</template>

<style lang="scss">
.apexcharts-legend-series {
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 5px !important;
  }
}
.apexcharts-legend-text {
  padding-left: 0 !important;
  margin-left: 10px !important;
}
</style>
