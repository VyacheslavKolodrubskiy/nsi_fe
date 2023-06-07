<script setup lang="ts">
import { QSelectOption, QTableColumn, QTableProps } from 'quasar'
import user from 'assets/img/user.png'

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

const initialRows = [
  {
    name: 'Марина Кравец',
    inProgress: '89',
    published: '7',
    onCompletion: '67',
    finished: '5',
    action: '',
  },
]

const rows = Array.from({ length: 15 }, (_, index) => ({
  ...initialRows[0],
  name: `${initialRows[0].name} ${index}`,
}))

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

const pagination = ref<QTableProps['pagination']>({
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 8,
})

function onEditClick(key: string) {
  console.log('onEditClick', key)
}
</script>

<template>
  <QTable
    v-model:pagination="pagination"
    :columns="columns"
    :filter="filter"
    flat
    row-key="name"
    :rows="rows"
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
            fit="contain"
            height="40px"
            no-spinner
            no-transition
            :src="user"
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
        active-color="primary"
        active-text-color="white"
        class="custom-pagination"
        color="color-1"
        direction-links
        gutter="sm"
        :max="scope.pagesNumber"
        :model-value="pagination?.page ?? 0"
        outline
        push
        :ripple="false"
        rounded
        size="15px"
        unelevated
        @update:model-value="(page) => (pagination!.page = page)"
      />
    </template>
  </QTable>
</template>

<style lang="scss">
.q-table__bottom {
  padding-left: 0;
}
.custom-pagination {
  margin-top: 15px;
  .q-btn--outline:before {
    border-color: $color-3;
  }
  .q-pagination__content > .q-btn,
  .q-pagination__middle > .q-btn {
    &:hover {
      background-color: $color-1 !important;

      &::before {
        border: none !important;
      }
      .q-icon,
      .block {
        color: $bg-color !important;
      }
    }
  }
}
</style>
