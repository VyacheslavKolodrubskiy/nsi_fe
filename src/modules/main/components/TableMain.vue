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
const currentOption = ref<QSelectOption>(options.value[0])

function onEditClick(key: string) {
  console.log('onEditClick', key)
}
</script>

<template>
  <QTable
    :columns="columns"
    :filter="filter"
    flat
    :pagination="{ rowsPerPage: 8 }"
    row-key="name"
    :rows="Array.from({ length: 100 }, () => rows).flatMap((arr) => arr)"
    :rows-per-page-options="[]"
    table-header-class="text-color-2"
  >
    <template #top-left>
      <div>
        <div class="q-mb-xs" style="font-size: 20px">Статистика менеджеров</div>

        <div class="text-color-2" style="font-size: 13px">
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
            height="40px"
            no-spinner
            src="src/assets/img/user.png"
            width="40px"
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

    <template #bottom="scope">
      <QPagination
        v-model="scope.pagesNumber"
        active-color="orange"
        active-design="push"
        color="teal"
        direction-links
        max="5"
        push
      />
    </template>
  </QTable>
</template>
