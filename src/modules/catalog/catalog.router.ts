import { Pages } from 'shared/enums/common'
import type { Router, RouteRecordRaw } from 'vue-router'

const moduleRoute: RouteRecordRaw = {
  path: 'catalog',
  component: () => import('shared/layouts/TheEmptyLayout.vue'),
  children: [
    {
      path: '',
      name: Pages.CATALOG_MAIN,
      component: () => import('modules/catalog/pages/CatalogMain.vue'),
    },
  ],
}

export default (router: Router) => {
  router.addRoute(Pages.DEFAULT, moduleRoute)
}
