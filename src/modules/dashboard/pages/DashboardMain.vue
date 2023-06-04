<script setup lang="ts">
import { ApexOptions } from 'apexcharts'
import { QSelectOption } from 'quasar'

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
</script>

<template>
  <div class="row no-wrap q-mb-xl">
    <QCard class="col card q-mr-md bg-transparent">
      <QCardSection class="flex no-wrap">
        <div>
          <QImg
            class="q-mb-md col"
            fit="contain"
            no-spinner
            src="src/assets/img/user.png"
            style="width: 150px; height: 150px"
          />
        </div>

        <div class="q-ml-xl q-pt-lg">
          <div class="q-mb-sm" style="font-size: 20px">Марина Кравец</div>

          <div class="q-mb-sm text-primary">m.kravets@machta.kz</div>

          <div class="text-bold">Менеджер</div>
        </div>
      </QCardSection>
    </QCard>

    <QCard class="col card">
      <QCardSection class="full-height">
        <QImg
          fit="contain"
          no-spinner
          src="src/assets/img/chart.png"
          style="max-width: 413px; max-height: 160px"
        />
      </QCardSection>
    </QCard>
  </div>

  <div>
    <div class="q-mb-md flex items-center text-color-2">
      <div class="q-mr-md">
        Вам доступно
        <span class="text-color-1 text-weight-bold">273 товара</span>
      </div>

      <div class="">
        Вам доступно
        <span class="text-color-1 text-weight-bold">273 товара</span>
      </div>
    </div>

    <div class="row q-mb-md">
      <QCard
        v-for="_ in 4"
        :key="_"
        class="col card"
        :class="{ 'q-mr-md': _ !== 4 }"
        flat
      >
        <QCardSection class="flex items-center">
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
        </QCardSection>
      </QCard>
    </div>

    <QCard class="card q-pa-md">
      <QCardSection>
        <div class="flex justify-between">
          <div>
            <div class="text-color-1" style="font-size: 20px">
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
      </QCardSection>
    </QCard>
  </div>
</template>

<style scoped lang="scss"></style>
