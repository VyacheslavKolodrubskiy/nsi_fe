<script setup lang="ts">
import { QSelectOption, QTableColumn } from 'quasar'

const columns: QTableColumn[] = [
  {
    name: 'name',
    align: 'left',
    label: 'ФИО менеджера',
    field: 'name',
  },
  {
    name: 'inProgress',
    align: 'left',
    label: 'В работе',
    field: 'inProgress',
  },
  {
    name: 'published',
    align: 'left',
    label: 'Опубликовано',
    field: 'published',
  },
  {
    name: 'onCompletion',
    align: 'left',
    label: 'На доработке',
    field: 'onCompletion',
  },
  {
    name: 'finished',
    align: 'left',
    label: 'Завершено',
    field: 'finished',
  },
  {
    name: 'action',
    align: 'left',
    label: '',
    field: 'action',
    style: 'width: 20px',
  },
]

const rows = [
  {
    name: 'Марина Кравец',
    inProgress: '89',
    published: '7',
    onCompletion: '67',
    finished: '5',
    action: '',
  },
]

interface Option {
  label: string
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

const filter = ref('')
const currentOption = ref<Option>(options.value[0])

function onEditClick(key: string) {
  console.log('onEditClick', key)
}
</script>

<template>
  <div class="row q-mb-lg">
    <QCard class="card col q-mr-md q-pa-lg" style="min-height: 344px">
      <QCardSection>
        <div class="q-mb-xs" style="font-size: 20px">Статусы товаров</div>

        <div class="" style="font-size: 13px; color: #7f8a94">
          Доли и количество всех товаров в различных статусах
        </div>
      </QCardSection>

      <QCardSection class="full-height">
        <QImg fit="contain" src="src/assets/img/chart.png" />
      </QCardSection>
    </QCard>

    <QCard class="card col q-pa-lg" style="min-height: 344px">
      <QCardSection>
        <div class="q-mb-xs" style="font-size: 20px">
          Аналитика завершенных карточек
        </div>

        <div style="font-size: 13px; color: #7f8a94">
          Количество и процентное соотношение товаров в статусе Завершено
        </div>
      </QCardSection>

      <QCardSection class="full-height">
        <QImg fit="contain" src="src/assets/img/chart.png" />
      </QCardSection>
    </QCard>
  </div>

  <div class="q-pa-lg bg-white" style="border-radius: 10px">
    <QTable
      :columns="columns"
      :filter="filter"
      flat
      row-key="name"
      :rows="rows"
      table-header-style="color: #7F8A94"
    >
      <template #top-left>
        <div>
          <div class="q-mb-xs" style="font-size: 20px">
            Статистика менеджеров
          </div>

          <div style="font-size: 13px; color: #7f8a94">
            Данные за {{ currentOption.label.toLowerCase() }}
          </div>
        </div>
      </template>

      <template #top-right>
        <TableSelect v-model="currentOption" :options="options" />
      </template>

      <template #body-cell-name="props">
        <QTd :props="props">
          <div class="flex items-center no-wrap">
            <QImg
              no-spinner
              src="src/assets/img/user.png"
              style="width: 40px; height: 40px"
            />

            <div class="q-ml-md">{{ props.value }}</div>
          </div>
        </QTd>
      </template>

      <template #body-cell-action="props">
        <QTd :props="props">
          <SvgIcon
            class="cursor-pointer"
            name="arrow-right"
            @click="onEditClick(props.key)"
        /></QTd>
      </template>
    </QTable>
  </div>
</template>
