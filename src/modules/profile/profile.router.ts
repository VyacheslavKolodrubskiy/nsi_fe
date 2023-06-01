import { PageName } from 'shared/enums/common'
import type { Router, RouteRecordRaw } from 'vue-router'

const moduleRoute: RouteRecordRaw = {
  path: 'profile',
  component: () => import('shared/components/TheEmptyRouterView.vue'),
  children: [
    {
      path: '',
      name: PageName.PROFILE_MAIN,
      component: () => import('modules/profile/pages/ProfileMain.vue'),
    },
  ],
}

export default (router: Router) => {
  router.addRoute(PageName.DEFAULT, moduleRoute)
}
