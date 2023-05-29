import { Pages } from 'shared/enums/common'
import type { Router, RouteRecordRaw } from 'vue-router'

const moduleRoute: RouteRecordRaw = {
  path: 'dashboard',
  component: () => import('shared/layouts/TheEmptyLayout.vue'),
  children: [
    {
      path: '',
      name: Pages.DASHBOARD_MAIN,
      component: () => import('modules/dashboard/pages/DashboardMain.vue'),
    },
  ],
}

export default (router: Router) => {
  router.addRoute(Pages.DEFAULT, moduleRoute)
}
