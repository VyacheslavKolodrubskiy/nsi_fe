import { QTreeNode } from 'quasar'

export const nodes: QTreeNode[] = [
  {
    label: 'Good food',
    children: [
      { label: 'Quality ingredients', icon: 'food' },
      { label: 'Good recipe' },
    ],
  },
  {
    label: 'Good service (disabled node)',
    children: [
      {
        label: 'Prompt attention',
        children: [
          { label: 'Happy atmosphere' },
          { label: 'Good table presentation' },
          { label: 'Pleasing decor' },
        ],
      },
      { label: 'Professional waiter' },
    ],
  },
  {
    label: 'Pleasant surroundings',
    children: [
      {
        label: 'Happy atmosphere',
        children: [
          { label: 'Happy atmosphere' },
          { label: 'Good table presentation' },
          { label: 'Pleasing decor' },
        ],
      },
      { label: 'Good table presentation' },
      {
        label: 'Pleasing decor',
      },
    ],
  },
]

export const managerOptions = [
  {
    label: 'Стас Старовойтов',
    value: 1,
  },
  {
    label: 'Руслан Белый',
    value: 2,
  },
]

export const supplierOptions = [
  {
    label: 'Категория 1',
    value: 1,
  },
  {
    label: 'Категория 2',
    value: 2,
  },
]
