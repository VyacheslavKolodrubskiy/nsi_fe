import { Pages } from 'shared/enums/common'
import type { Router, RouteRecordRaw } from 'vue-router'

const moduleRoute: RouteRecordRaw = {
  path: '/auth',
  meta: {
    restrictAuth: true,
  },
  component: () => import('shared/layouts/TheAuthLayout.vue'),
  children: [
    {
      path: '',
      name: Pages.AUTH,
      component: () => import('modules/auth/pages/AuthMain.vue'),
    },
  ],
}

export default (router: Router) => {
  router.addRoute(moduleRoute)
}
