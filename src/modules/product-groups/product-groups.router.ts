import { Pages } from 'shared/enums/common'
import type { Router, RouteRecordRaw } from 'vue-router'

const moduleRoute: RouteRecordRaw = {
  path: 'product-groups',
  component: () => import('shared/layouts/TheEmptyLayout.vue'),
  children: [
    {
      path: '',
      name: Pages.PRODUCT_GROUPS_MAIN,
      component: () =>
        import('modules/product-groups/pages/ProductGroupsMain.vue'),
    },
  ],
}

export default (router: Router) => {
  router.addRoute(Pages.DEFAULT, moduleRoute)
}
