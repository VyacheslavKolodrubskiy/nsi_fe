import { PageName } from 'shared/enums/common'
import type { Router, RouteRecordRaw } from 'vue-router'

const moduleRoute: RouteRecordRaw = {
  path: 'users',
  component: () => import('shared/layouts/TheEmptyLayout.vue'),
  children: [
    {
      path: '',
      name: PageName.USERS_MAIN,
      component: () => import('modules/users/pages/UsersMain.vue'),
    },
  ],
}

export default (router: Router) => {
  router.addRoute(PageName.DEFAULT, moduleRoute)
}
