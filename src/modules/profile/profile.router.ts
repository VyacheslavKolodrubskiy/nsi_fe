import { Pages } from 'shared/enums/common'
import type { Router, RouteRecordRaw } from 'vue-router'

const moduleRoute: RouteRecordRaw = {
  path: '/',
  component: () => import('shared/layouts/TheDefaultLayout.vue'),
  children: [
    {
      path: '/profile',
      component: () => import('shared/layouts/TheEmptyLayout.vue'),
      children: [
        {
          path: '',
          name: Pages.PROFILE,
          component: () => import('modules/profile/pages/ProfileMain.vue'),
        },
      ],
    },
  ],
}

export default (router: Router) => {
  router.addRoute(moduleRoute)
}
