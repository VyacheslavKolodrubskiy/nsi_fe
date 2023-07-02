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
