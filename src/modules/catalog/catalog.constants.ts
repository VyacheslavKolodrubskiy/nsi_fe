import { date, QSelectOption, QTableColumn } from 'quasar'

export const columns: QTableColumn[] = [
  {
    name: 'status',
    align: 'left',
    label: 'Статус',
    field: 'status',
  },
  {
    name: 'code',
    align: 'left',
    label: 'Артикул',
    field: 'code',
  },
  {
    name: 'name',
    align: 'left',
    label: 'Наименование товара',
    field: 'name',
    style: 'max-width: 160px; white-space: normal',
  },
  {
    name: 'category_id',
    align: 'left',
    label: 'Категория',
    field: 'category_id',
  },
  {
    name: 'created_at',
    align: 'left',
    label: 'Cоздание',
    field: 'created_at',
    format(val) {
      return date.formatDate(val, 'DD.MM.YYYY')
    },
  },
  {
    name: 'modified_at',
    align: 'left',
    label: 'Изменение',
    field: 'modified_at',
    format(val) {
      return date.formatDate(val, 'DD.MM.YYYY')
    },
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

export const options = ref<QSelectOption[]>([
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
