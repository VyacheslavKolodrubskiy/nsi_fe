import { Pages } from 'shared/enums/common'
import type { Router, RouteRecordRaw } from 'vue-router'

const moduleRoute: RouteRecordRaw = {
  path: '/catalog',
  component: () => import('shared/layouts/TheDefaultLayout.vue'),
  children: [
    {
      path: '',
      name: Pages.CATALOG,
      component: () => import('modules/catalog/pages/CatalogMain.vue'),
    },
  ],
}

export default (router: Router) => {
  router.addRoute(moduleRoute)
}
