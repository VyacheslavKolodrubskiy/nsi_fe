<script setup lang="ts">
import { QTableColumn } from 'quasar'

const filter = ref('')
const currentOption = ref('Сегодня')

const options = ref([
  {
    label: 'Сегодня',
  },
  {
    label: 'Завтра',
  },
  {
    label: 'Все время',
  },
])

function onEditClick(key: string) {
  console.log('onEditClick', key)
}

const columns: QTableColumn[] = [
  {
    name: 'name',
    align: 'left',
    label: 'ФИО менеджера',
    field: 'name',
    headerStyle: 'color: #7F8A94',
  },
  {
    name: 'inProgress',
    align: 'left',
    label: 'В работе',
    field: 'inProgress',
    headerStyle: 'color: #7F8A94',
  },
  {
    name: 'published',
    align: 'left',
    label: 'Опубликовано',
    field: 'published',
    headerStyle: 'color: #7F8A94',
  },
  {
    name: 'onCompletion',
    align: 'left',
    label: 'На доработке',
    field: 'onCompletion',
    headerStyle: 'color: #7F8A94',
  },
  {
    name: 'finished',
    align: 'left',
    label: 'Завершено',
    field: 'finished',
    headerStyle: 'color: #7F8A94',
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
</script>

<template>
  <div class="row q-mb-lg">
    <QCard
      aria-atomic="a"
      class="card col q-mr-md q-pa-lg"
      style="min-height: 344px"
    >
      <QCardSection>
        <div class="q-mb-xs" style="font-size: 20px">Статусы товаров</div>

        <div class="" style="font-size: 13px; color: #7f8a94">
          Доли и количество всех товаров в различных статусах
        </div>
      </QCardSection>
    </QCard>

    <QCard class="card col q-pa-lg" style="min-height: 344px">
      <QCardSection>
        <div class="q-mb-xs" style="font-size: 20px">Статусы товаров</div>

        <div class="" style="font-size: 13px; color: #7f8a94">
          Доли и количество всех товаров в различных статусах
        </div>
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
    >
      <template #top-left>
        <div>
          <div class="q-mb-xs" style="font-size: 20px">
            Статистика менеджеров
          </div>

          <div style="font-size: 13px; color: #7f8a94">Данные за сегодня</div>
        </div>
      </template>

      <template #top-right>
        <QSelect
          v-model="currentOption"
          bg-color="grey-3"
          dense
          dropdown-icon="expand_more"
          :options="options"
          outlined
        />
      </template>

      <template v-slot:body-cell-name="props">
        <QTd :props="props">
          <div class="flex items-center no-wrap">
            <QImg
              no-spinner
              src="src/assets/user.png"
              style="width: 40px; height: 40px"
            />

            <div>{{ props.value }}</div>
          </div>
        </QTd>
      </template>

      <template v-slot:body-cell-action="props">
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
