import { Pages } from 'shared/enums/common'
import type { Router, RouteRecordRaw } from 'vue-router'

const moduleRoute: RouteRecordRaw = {
  path: '/',
  component: () => import('shared/layouts/TheDefaultLayout.vue'),
  children: [
    {
      path: '/categories',
      component: () => import('shared/layouts/TheEmptyLayout.vue'),
      children: [
        {
          path: '',
          name: Pages.CATEGORIES,
          component: () =>
            import('modules/categories/pages/CategoriesMain.vue'),
        },
      ],
    },
  ],
}

export default (router: Router) => {
  router.addRoute(moduleRoute)
}
