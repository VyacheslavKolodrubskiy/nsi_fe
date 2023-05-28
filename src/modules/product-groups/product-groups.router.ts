import { Pages } from 'shared/enums/common'
import type { Router, RouteRecordRaw } from 'vue-router'

const moduleRoute: RouteRecordRaw = {
  path: '/product-groups',
  component: () => import('shared/layouts/TheDefaultLayout.vue'),
  children: [
    {
      path: '',
      name: Pages.PRODUCT_GROUPS,
      component: () =>
        import('modules/product-groups/pages/ProductGroupsMain.vue'),
    },
  ],
}

export default (router: Router) => {
  router.addRoute(moduleRoute)
}
