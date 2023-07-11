import { QSelectOption, QTableColumn } from 'quasar'

export const columns: QTableColumn[] = [
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

export const initialRows = [
  {
    name: 'Марина Кравец',
    inProgress: '89',
    published: '7',
    onCompletion: '67',
    finished: '5',
    action: '',
  },
]

export const rows = Array.from({ length: 100 }, (_, index) => ({
  ...initialRows[0],
  name: `${initialRows[0].name} ${index}`,
}))

export const options = ref<QSelectOption[]>([
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
