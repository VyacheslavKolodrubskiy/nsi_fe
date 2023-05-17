import { Pages } from 'shared/enums/common'
import { useAuthStore } from 'src/modules/auth/auth.store'
import type { Router } from 'vue-router'

export function beforeEachGuard(router: Router) {
  router.beforeEach((to, _, next) => {
    const authStore = useAuthStore()

    if (!authStore.isAuthenticated && to.name !== Pages.AUTH) {
      next({ name: Pages.AUTH })
    } else if (authStore.isAuthenticated && to.name === Pages.AUTH) {
      next({ name: Pages.MAIN })
    } else {
      next()
    }
  })
}
