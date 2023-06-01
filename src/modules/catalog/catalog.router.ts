import { PageName } from 'shared/enums/common'
import type { Router, RouteRecordRaw } from 'vue-router'

const moduleRoute: RouteRecordRaw = {
  path: 'catalog',
  component: () => import('shared/components/TheEmptyRouterView.vue'),
  children: [
    {
      path: '',
      name: PageName.CATALOG_MAIN,
      component: () => import('modules/catalog/pages/CatalogMain.vue'),
    },
  ],
}

export default (router: Router) => {
  router.addRoute(PageName.DEFAULT, moduleRoute)
}
