<script setup lang="ts">
import { ApexOptions } from 'apexcharts'

const chartOptions: ApexOptions = {
  series: [
    {
      name: 'Новых товаров',
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: 'В работе',
      data: [13, 23, 20, 8, 13, 27],
    },
    {
      name: 'Опубликовано',
      data: [11, 17, 15, 15, 21, 14],
    },
    {
      name: 'На доработке',
      data: [21, 7, 25, 13, 22, 8],
    },
  ],
  colors: ['#E61771', '#0075CD', '#B20087', '#39C2C9'],
  chart: {
    type: 'bar',
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '01/01/2011 GMT',
      '01/02/2011 GMT',
      '01/03/2011 GMT',
      '01/04/2011 GMT',
      '01/05/2011 GMT',
      '01/06/2011 GMT',
    ],
  },
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
  fill: {
    opacity: 1,
  },
}
</script>

<template>
  <ApexChart
    :height="250"
    :options="chartOptions"
    :series="chartOptions.series"
    type="bar"
    width="100%"
  />
</template>

<style lang="scss"></style>
