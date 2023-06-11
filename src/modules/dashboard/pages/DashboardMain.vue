<script setup lang="ts">
import { ApexOptions } from 'apexcharts'
import { QSelectOption } from 'quasar'
import user from 'assets/img/user.png'

const chartOptions: ApexOptions = {
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
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
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

const options = ref<QSelectOption[]>([
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

const currentOption = ref<QSelectOption>(options.value[0])
const value = ref(false)
const value2 = ref(false)
</script>

<template>
  {{ value }}

  <QToggle v-model="value2" />

  <BaseToggle v-model="value" />

  <div class="row q-mb-xl q-col-gutter-md">
    <div class="col">
      <div class="flex q-gutter-md">
        <div>
          <QImg
            fit="contain"
            height="150px"
            no-spinner
            no-transition
            :src="user"
            width="150px"
          />
        </div>

        <div class="q-ml-xl q-pt-lg">
          <div class="q-mb-sm" style="font-size: 20px">Марина Кравец</div>

          <div class="q-mb-sm text-primary">m.kravets@machta.kz</div>

          <div class="text-bold">Менеджер</div>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card">
        <PieChart />
      </div>
    </div>
  </div>

  <div>
    <div class="row q-col-gutter-md q-mb-md text-color-2">
      <div class="col-3">
        Вам доступно
        <span class="text-color-1 text-weight-bold" style="font-size: 16px">
          273 товара
        </span>
      </div>

      <div class="col-3">
        Завершено
        <span class="text-color-1 text-weight-bold" style="font-size: 16px">
          5673 товара
        </span>
      </div>
    </div>

    <div class="row q-mb-md q-gutter-md">
      <div
        v-for="_ in 4"
        :key="_"
        class="card card--mini col row q-gutter-sm items-center"
      >
        <div
          style="
            background: rgba(230, 23, 113, 0.2);
            padding: 10px;
            border-radius: 100%;
            width: 60px;
            height: 60px;
          "
        >
          <div
            class="bg-primary flex flex-center"
            style="border-radius: 100%; width: 40px; height: 40px"
          >
            <SvgIcon height="20" name="purchase" width="20" />
          </div>
        </div>

        <div class="q-ml-md">
          <div class="text-no-wrap">
            <strong>30</strong>
            (30%)
          </div>

          <div class="text-color-2">Новые товары</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="flex justify-between">
        <div>
          <div class="text-color-1 q-mb-sm" style="font-size: 20px">
            Аналитика завершенных карточек
          </div>

          <div class="text-color-2" style="font-size: 13px">
            Данные за {{ currentOption.label.toLowerCase() }}
          </div>
        </div>

        <TableSelect v-model="currentOption" :options="options" />
      </div>

      <ApexChart
        height="250"
        :options="chartOptions"
        :series="chartOptions.series"
        type="line"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
