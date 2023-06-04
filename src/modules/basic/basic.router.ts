import type { Router, RouteRecordRaw } from 'vue-router'

const moduleRoute: RouteRecordRaw = {
  // Always leave this as last one,
  // but you can also remove it
  path: '/:catchAll(.*)*',
  component: () => import('shared/layouts/TheNotFoundLayout.vue'),
  children: [
    {
      path: '',
      component: () => import('modules/basic/pages/ErrorNotFound.vue'),
    },
  ],
}

export default (router: Router) => {
  router.addRoute(moduleRoute)
}
