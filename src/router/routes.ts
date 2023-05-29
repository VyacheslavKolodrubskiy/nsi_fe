import { Pages } from 'shared/enums/common'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: Pages.DEFAULT,
    redirect: {
      name: Pages.DASHBOARD_MAIN,
    },
    component: () => import('shared/layouts/TheDefaultLayout.vue'),
    children: [],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
