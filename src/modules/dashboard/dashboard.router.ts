import { Pages } from 'shared/enums/common'
import type { Router, RouteRecordRaw } from 'vue-router'

const moduleRoute: RouteRecordRaw = {
  path: '/',
  component: () => import('shared/layouts/TheDefaultLayout.vue'),
  children: [
    {
      path: '/dashboard',
      component: () => import('shared/layouts/TheEmptyLayout.vue'),
      children: [
        {
          path: '',
          name: Pages.MAIN,
          component: () => import('modules/dashboard/pages/DashboardMain.vue'),
        },
      ],
    },
  ],
}

export default (router: Router) => {
  router.addRoute(moduleRoute)
}
