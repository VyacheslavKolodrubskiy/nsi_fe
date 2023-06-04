import { LayoutName, PageName } from 'shared/enums/common.enum'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: LayoutName.MAIN_LAYOUT,
    redirect: { name: PageName.MAIN },
    component: () => import('shared/layouts/TheMainLayout.vue'),
    children: [],
  },
  {
    // Always leave this as last one,
    // but you can also remove it
    path: '/:catchAll(.*)*',
    name: PageName.ERROR_404,
    component: () => import('shared/components/404.vue'),
  },
]

export default routes
