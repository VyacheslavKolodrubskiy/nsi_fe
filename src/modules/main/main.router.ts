import { PageName } from 'shared/enums/common'
import type { Router, RouteRecordRaw } from 'vue-router'

const moduleRoute: RouteRecordRaw = {
  path: '',
  name: PageName.MAIN,
  component: () => import('modules/main/pages/Main.vue'),
}

export default (router: Router) => {
  router.addRoute(PageName.DEFAULT, moduleRoute)
}
