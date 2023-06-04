import { LayoutName, PageName } from 'shared/enums/common.enum'
import type { Router, RouteRecordRaw } from 'vue-router'

const moduleRoute: RouteRecordRaw = {
  path: 'product-groups',
  component: () => import('shared/components/TheEmptyRouterView.vue'),
  children: [
    {
      path: '',
      name: PageName.PRODUCT_GROUPS_MAIN,
      component: () =>
        import('modules/product-groups/pages/ProductGroupsMain.vue'),
    },
  ],
}

export default (router: Router) => {
  router.addRoute(LayoutName.MAIN_LAYOUT, moduleRoute)
}
