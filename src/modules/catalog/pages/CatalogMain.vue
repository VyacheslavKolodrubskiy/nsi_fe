<script setup lang="ts">
import { QSelectOption, QTableColumn, QTableProps } from 'quasar'

const columns: QTableColumn[] = [
  {
    name: 'status',
    align: 'left',
    label: 'Статус',
    field: 'status',
  },
  {
    name: 'article',
    align: 'left',
    label: 'Артикул',
    field: 'article',
  },
  {
    name: 'productName',
    align: 'left',
    label: 'Наименование товара',
    field: 'productName',
    style: 'max-width: 160px; white-space: normal',
  },
  {
    name: 'category',
    align: 'left',
    label: 'Категория',
    field: 'category',
  },
  {
    name: 'createdAt',
    align: 'left',
    label: 'Cоздание',
    field: 'createdAt',
  },
  {
    name: 'updatedAt',
    align: 'left',
    label: 'Изменение',
    field: 'updatedAt',
  },
  {
    name: 'filled',
    align: 'left',
    label: 'Заполнено',
    field: 'filled',
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
    status: 'Новый',
    article: '04812',
    productName: 'Холодильник BOSCH KDD 86AI304',
    category: 'Холодильники',
    createdAt: '30.03.2023',
    updatedAt: '29.04.2023',
    filled: '',
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

const pagination = ref<QTableProps['pagination']>({
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 8,
})

const filter = ref('')
const currentOption = ref<Option>(options.value[0])
const selected = ref([])
const filled = ref(20)
</script>

<template>
  <div class="card">
    <QTable
      v-model:pagination="pagination"
      v-model:selected="selected"
      class="catalog-table"
      :columns="columns"
      :filter="filter"
      flat
      row-key="name"
      :rows="
        Array.from({ length: 100 }, (_, index) => ({
          ...rows[0],
          name: `${rows[0].status} ${index}`,
        }))
      "
      selection="single"
      table-header-class="text-color-2"
    >
      <template #top-left>
        <div>
          <div class="q-mb-md">
            <div class="q-mb-xs" style="font-size: 20px">Каталог товаров</div>

            <div class="text-color-2" style="font-size: 13px">
              Доступные Вам карточки
            </div>
          </div>

          <div class="flex items-center">
            <TableSelect
              v-model="currentOption"
              class="q-mr-md"
              :options="options"
            />

            <QBtn class="bg-color-4" flat no-caps :ripple="false">
              <div>Создать группу</div>

              <SvgIcon class="q-ml-sm" name="create-group" />
            </QBtn>
          </div>
        </div>
      </template>

      <template #top-right>
        <div class="flex">
          <div class="rounded-borders bg-color-4 q-pa-xs q-mr-sm">
            <SvgIcon name="filter" />
          </div>

          <SearchTableInput v-model="filter" />
        </div>
      </template>

      <template #body-cell-filled="props">
        <QTd :props="props">
          <div
            class="relative-position"
            style="
              background: #dce0e3;
              border-radius: 20px;
              width: 50px;
              height: 7px;
            "
          >
            <div
              class="absolute-position"
              :style="{
                width: `${filled}%`,
                height: 'inherit',
                left: '0',
                background: '#e61771',
                borderRadius: 'inherit',
              }"
            />
          </div>
        </QTd>
      </template>

      <template #body-cell-action="props">
        <QTd :props="props">
          <QBtn
            color="color-1"
            flat
            label="Взять в работу"
            no-caps
            style="background: #cfebd1; border-radius: 5px"
          />
        </QTd>
      </template>

      <template #bottom="scope">
        <QPagination
          active-color="primary"
          active-text-color="white"
          :boundary-numbers="false"
          class="custom-pagination"
          color="color-1"
          direction-links
          gutter="sm"
          :max="scope.pagesNumber"
          :max-pages="6"
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
  </div>
</template>

<style scoped lang="scss"></style>
