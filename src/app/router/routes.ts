import { PageName } from 'shared/enums/common'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: PageName.DEFAULT,
    redirect: { name: PageName.MAIN },
    component: () => import('shared/layouts/TheDefaultLayout.vue'),
    children: [],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('shared/layouts/TheNotFoundLayout.vue'),
    children: [
      {
        path: '',
        name: PageName.NOT_FOUND,
        component: () => import('pages/ErrorNotFound.vue'),
      },
    ],
  },
]

export default routes
