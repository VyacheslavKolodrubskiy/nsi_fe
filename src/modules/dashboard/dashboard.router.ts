import { PageName } from 'shared/enums/common'
import type { Router, RouteRecordRaw } from 'vue-router'

const moduleRoute: RouteRecordRaw = {
  path: 'dashboard',
  component: () => import('shared/components/TheEmptyRouterView.vue'),
  children: [
    {
      path: '',
      name: PageName.DASHBOARD_MAIN,
      component: () => import('modules/dashboard/pages/DashboardMain.vue'),
    },
  ],
}

export default (router: Router) => {
  router.addRoute(PageName.DEFAULT, moduleRoute)
}
