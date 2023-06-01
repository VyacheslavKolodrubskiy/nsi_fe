<script setup lang="ts">
import { QSelectOption, QTableColumn } from 'quasar'

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

interface Option {
  label: string
}

const options = ref<QSelectOption[]>([
  {
    value: 'catalog',
    label: 'Каталог',
  },
  {
    value: 'catalog',
    label: 'Каталог',
  },
  {
    value: 'catalog',
    label: 'Каталог',
  },
])

const filter = ref('')
const currentOption = ref<Option>(options.value[0])
</script>

<template>
  <div class="q-pa-lg bg-white" style="border-radius: 10px">
    <QTable
      class="catalog-table"
      :columns="columns"
      :filter="filter"
      flat
      row-key="name"
      :rows="rows"
    >
      <template #top-left>
        <div>
          <div class="q-mb-md">
            <div class="q-mb-xs" style="font-size: 20px">Каталог товаров</div>

            <div style="font-size: 13px; color: #7f8a94">
              Доступные Вам карточки
            </div>
          </div>

          <div>
            <TableSelect v-model="currentOption" :options="options" />
          </div>
        </div>
      </template>

      <template #top-right>
        <SearchTableInput v-model="filter" />
      </template>

      <template v-slot:body-cell-name="props">
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
    </QTable>
  </div>
</template>

<style scoped lang="scss"></style>
