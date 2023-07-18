import { QTableColumn } from 'quasar'

export const columns: QTableColumn[] = [
  {
    name: 'name',
    align: 'left',
    label: 'ФИО',
    field: 'name',
  },
  {
    name: 'email',
    align: 'left',
    label: 'Почта/ Логин',
    field: 'email',
  },
  {
    name: 'role',
    align: 'left',
    label: 'Роль',
    field: 'role',
  },
  {
    name: 'lastLoginTime',
    align: 'left',
    label: 'Время последнего входа',
    field: 'lastLoginTime',
  },
  {
    name: 'status',
    align: 'left',
    label: 'Статус',
    field: 'status',
  },
  {
    name: 'action',
    align: 'left',
    label: '',
    field: 'action',
  },
]

export const rows = [
  {
    name: 'Марина Кравец',
    email: 'm.kravets@machta.kz',
    role: 'Контент-менеджер',
    lastLoginTime: '12:34  |  04.04.2023',
    status: 'Активен',
    action: '',
  },
]
