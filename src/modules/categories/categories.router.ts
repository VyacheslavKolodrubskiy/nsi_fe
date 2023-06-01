import { PageName } from 'shared/enums/common'
import type { Router, RouteRecordRaw } from 'vue-router'

const moduleRoute: RouteRecordRaw = {
  path: 'categories',
  component: () => import('shared/components/TheEmptyRouterView.vue'),
  children: [
    {
      path: '',
      name: PageName.CATEGORIES_MAIN,
      component: () => import('modules/categories/pages/CategoriesMain.vue'),
    },
  ],
}

export default (router: Router) => {
  router.addRoute(PageName.DEFAULT, moduleRoute)
}
