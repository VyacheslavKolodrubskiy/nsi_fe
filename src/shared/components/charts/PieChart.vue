<script setup lang="ts">
import { ApexOptions } from 'apexcharts'

const options: ApexOptions = {
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

const series: ApexOptions['series'] = [44, 55, 13, 43]
</script>

<template>
  <ApexChart :options="options" :series="series" type="pie" :width="400" />
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
