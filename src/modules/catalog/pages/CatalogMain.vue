<script setup lang="ts">
import { QSelectOption, QTableColumn } from 'quasar'

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

const filter = ref('')
const currentOption = ref<Option>(options.value[0])
const selected = ref([])
const filled = ref(20)
</script>

<template>
  <div class="card">
    <QTable
      v-model:selected="selected"
      class="catalog-table"
      :columns="columns"
      :filter="filter"
      flat
      :pagination="{ rowsPerPage: 8 }"
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

          <div>
            <TableSelect v-model="currentOption" :options="options" />
          </div>
        </div>
      </template>

      <template #top-right>
        <SearchTableInput v-model="filter" />
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
    </QTable>
  </div>
</template>

<style scoped lang="scss"></style>
