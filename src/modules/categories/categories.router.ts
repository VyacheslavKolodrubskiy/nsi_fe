import { Pages } from 'shared/enums/common'
import type { Router, RouteRecordRaw } from 'vue-router'

const moduleRoute: RouteRecordRaw = {
  path: '/categories',
  component: () => import('shared/layouts/TheDefaultLayout.vue'),
  children: [
    {
      path: '',
      name: Pages.CATEGORIES,
      component: () => import('modules/categories/pages/CategoriesMain.vue'),
    },
  ],
}

export default (router: Router) => {
  router.addRoute(moduleRoute)
}
