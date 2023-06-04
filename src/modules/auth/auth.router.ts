import { LayoutName, PageName } from 'shared/enums/common.enum'
import type { Router, RouteRecordRaw } from 'vue-router'

const moduleRoute: RouteRecordRaw = {
  path: '/auth',
  name: LayoutName.AUTH_LAYOUT,
  component: () => import('shared/layouts/TheAuthLayout.vue'),
  children: [
    {
      path: '',
      name: PageName.AUTH,
      component: () => import('modules/auth/pages/AuthMain.vue'),
    },
  ],
}

export default (router: Router) => {
  router.addRoute(moduleRoute)
}
