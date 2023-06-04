<script setup lang="ts">
import { QSelectOption } from 'quasar'
import BaseSelect from 'src/shared/components/select/BaseSelect.vue'
import TableMain from '../components/TableMain.vue'

const options: QSelectOption[] = [
  {
    value: 'today',
    label: 'Сегодня',
  },
  {
    value: 'yesterday',
    label: 'Вчера',
  },
  {
    value: 'thisWeek',
    label: 'На этой неделе',
  },
]

const select = ref<QSelectOption | null>(null)
</script>

<template>
  <BaseSelect
    v-model="select"
    label="kek"
    :options="Array.from({ length: 3 }, () => options).flatMap((arr) => arr)"
  />

  <div class="row q-mb-lg">
    <QCard class="card col q-mr-md q-pa-lg">
      <QCardSection>
        <div class="q-mb-xs" style="font-size: 20px">Статусы товаров</div>

        <div class="text-colo1" style="color: #7f8a94">
          Доли и количество всех товаров в различных статусах
        </div>
      </QCardSection>

      <QCardSection>
        <QImg
          fit="contain"
          no-spinner
          src="src/assets/img/chart.png"
          style="max-width: 413px; max-height: 160px"
        />
      </QCardSection>
    </QCard>

    <QCard class="card col q-pa-lg">
      <QCardSection>
        <div class="q-mb-xs" style="font-size: 20px">
          Аналитика завершенных карточек
        </div>

        <div style="font-size: 13px; color: #7f8a94">
          Количество и процентное соотношение товаров в статусе Завершено
        </div>
      </QCardSection>

      <QCardSection>
        <QImg
          fit="contain"
          no-spinner
          src="src/assets/img/chart.png"
          style="max-width: 413px; max-height: 160px"
        />
      </QCardSection>
    </QCard>
  </div>

  <div class="q-pa-lg bg-white" style="border-radius: 10px">
    <TableMain />
  </div>
</template>
