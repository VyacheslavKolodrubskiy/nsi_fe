import { useAuthStore } from 'src/modules/auth/auth.store'
import type { Router } from 'vue-router'

export function beforeEachGuard(router: Router) {
  router.beforeEach((to, _, next) => {
    const authStore = useAuthStore()

    if (!authStore.isAuthenticated && to.name !== 'AuthMain') {
      next({ name: 'AuthMain' })
    } else if (authStore.isAuthenticated && to.name === 'AuthMain') {
      next({ name: 'Main' })
    } else {
      next()
    }
  })
}
