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
]

export default routes
