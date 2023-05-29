import { Pages } from 'shared/enums/common'
import type { Router, RouteRecordRaw } from 'vue-router'

const moduleRoute: RouteRecordRaw = {
  path: '/',
  component: () => import('shared/layouts/TheDefaultLayout.vue'),
  children: [
    {
      path: '/users',
      component: () => import('shared/layouts/TheEmptyLayout.vue'),
      children: [
        {
          path: '',
          name: Pages.USERS,
          component: () => import('modules/user/pages/UsersMain.vue'),
        },
      ],
    },
  ],
}

export default (router: Router) => {
  router.addRoute(moduleRoute)
}
