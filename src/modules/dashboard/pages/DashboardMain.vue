<script setup lang="ts">
import { QSelectOption } from 'quasar'
import { chartOptions, options } from '../dashboard.constants'
import userImg from 'assets/img/user.png'

const currentOption = ref<QSelectOption>(options.value[0])
</script>

<template>
  <div class="q-col-gutter-md q-mb-xl row">
    <div class="col">
      <div class="flex q-gutter-md">
        <div>
          <QImg
            fit="contain"
            height="150px"
            no-spinner
            no-transition
            :src="userImg"
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
    <div class="q-col-gutter-md q-mb-md row text-color-2">
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

    <div class="q-gutter-md q-mb-md row">
      <div
        v-for="_ in 4"
        :key="_"
        class="card card--mini col items-center q-gutter-sm row"
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
            <BaseIcon height="20" name="purchase" width="20" />
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
          <div class="q-mb-sm text-color-1" style="font-size: 20px">
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
