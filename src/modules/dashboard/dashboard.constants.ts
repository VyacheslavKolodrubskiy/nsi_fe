import { ApexOptions } from 'apexcharts'
import { QSelectOption } from 'quasar'

export const chartOptions: ApexOptions = {
  series: [
    {
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ],
  colors: ['#0F991B'],
  chart: {
    toolbar: {
      show: false,
    },
    type: 'line',
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 1,
    curve: 'straight',
  },
  grid: {
    column: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5,
    },
  },
  tooltip: {
    y: {
      title: {
        formatter: function () {
          return ''
        },
      },
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  },
}

export const options = ref<QSelectOption[]>([
  {
    value: 'today',
    label: 'Сегодня',
  },
  {
    value: 'tomorrow',
    label: 'Завтра',
  },
  {
    value: 'allTime',
    label: 'Все время',
  },
])
